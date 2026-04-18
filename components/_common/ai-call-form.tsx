"use client";

import { useLiveDemoAiCallStore } from "@/stores/live-demo-ai-call-store";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const HUBSPOT_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";
const HUBSPOT_SCRIPT_ID = "hs-forms-v2-script";

const PORTAL_ID = "5109119";
// const FORM_ID = "7b318854-532b-4552-a161-c6e952e13c75";
const FORM_ID = "1cb9d276-9280-4e85-9aac-29f9773cb7d8";
const REGION = "na1";
/** Matches HubSpot embed `target: "#hubspot-form"` — must be unique on the page. */
const TARGET_ID = "hubspot-form";

/** HubSpot renders `id="phone-{formId}"` on the phone input for this embed. */
const HUBSPOT_PHONE_FIELD_ID = `phone-${FORM_ID}`;

const POST_EMBED_SYNC_DELAY_MS = 200;
const DOM_RETRY_MAX = 80;
const DOM_RETRY_INTERVAL_MS = 100;

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

export type AiCallFormProps = {
  className?: string;
};

function getHubspotPhoneInput(): HTMLInputElement | null {
  return document.getElementById(
    HUBSPOT_PHONE_FIELD_ID,
  ) as HTMLInputElement | null;
}

function setHubspotPhoneValue(value: string): boolean {
  const el = getHubspotPhoneInput();
  if (!el) return false;
  el.value = value;
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
  return true;
}

function getHubspotTalkSubmit(): HTMLInputElement | null {
  const root = document.getElementById(TARGET_ID);
  if (!root) return null;
  return root.querySelector<HTMLInputElement>(
    'input[type="submit"].hs-button.primary.large',
  );
}

function clickHubspotTalkToAiSubmit(): boolean {
  const submit = getHubspotTalkSubmit();
  if (!submit) return false;
  submit.click();
  return true;
}

/** Phone field and submit exist — embed has finished rendering. */
function isHubspotFormDomReady(): boolean {
  return Boolean(getHubspotPhoneInput() && getHubspotTalkSubmit());
}

export function AiCallForm({ className }: AiCallFormProps) {
  const [loadError, setLoadError] = useState(false);
  /** Bumped after HubSpot injects the form so store→DOM effects can retry. */
  const [hubspotEmbedGeneration, setHubspotEmbedGeneration] = useState(0);
  /** Outer wrapper stays hidden until the HubSpot phone + submit nodes exist. */
  const [formDomReady, setFormDomReady] = useState(false);

  const phoneRaw = useLiveDemoAiCallStore((s) => s.phoneRaw);
  const hubspotSubmitSeq = useLiveDemoAiCallStore((s) => s.hubspotSubmitSeq);
  const lastHubspotE164 = useLiveDemoAiCallStore((s) => s.lastHubspotE164);
  const lastAppliedSubmitSeq = useRef(0);

  /** Mirror global `phoneRaw` into HubSpot’s `#phone-{formId}` whenever it or the embed changes. */
  useEffect(() => {
    let cancelled = false;
    let attempt = 0;
    let timeoutId: number | undefined;

    const tick = () => {
      if (cancelled) return;
      if (setHubspotPhoneValue(phoneRaw)) return;
      attempt += 1;
      if (attempt >= DOM_RETRY_MAX) return;
      timeoutId = window.setTimeout(tick, DOM_RETRY_INTERVAL_MS);
    };

    tick();
    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [phoneRaw, hubspotEmbedGeneration]);

  /**
   * On validated submit: set E.164 on `#phone-{formId}`, then click
   * `input.hs-button.primary.large` (“Talk to the AI”).
   */
  useEffect(() => {
    if (hubspotSubmitSeq === 0 || !lastHubspotE164) return;
    if (hubspotSubmitSeq <= lastAppliedSubmitSeq.current) return;

    let cancelled = false;
    let attempt = 0;
    let timeoutId: number | undefined;

    const tick = () => {
      if (cancelled) return;
      if (
        setHubspotPhoneValue(lastHubspotE164) &&
        clickHubspotTalkToAiSubmit()
      ) {
        lastAppliedSubmitSeq.current = hubspotSubmitSeq;
        return;
      }
      attempt += 1;
      if (attempt >= DOM_RETRY_MAX) return;
      timeoutId = window.setTimeout(tick, DOM_RETRY_INTERVAL_MS);
    };

    tick();
    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [hubspotSubmitSeq, lastHubspotE164, hubspotEmbedGeneration]);

  useEffect(() => {
    if (loadError) {
      setFormDomReady(false);
      return;
    }

    let cancelled = false;
    let attempt = 0;
    let timeoutId: number | undefined;

    setFormDomReady(false);

    const tick = () => {
      if (cancelled) return;
      if (isHubspotFormDomReady()) {
        setFormDomReady(true);
        return;
      }
      attempt += 1;
      if (attempt >= DOM_RETRY_MAX) return;
      timeoutId = window.setTimeout(tick, DOM_RETRY_INTERVAL_MS);
    };

    tick();
    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [hubspotEmbedGeneration, loadError]);

  useEffect(() => {
    let isMounted = true;
    let bumpTimer: number | undefined;

    const bumpEmbedGeneration = () => {
      if (bumpTimer !== undefined) window.clearTimeout(bumpTimer);
      bumpTimer = window.setTimeout(() => {
        bumpTimer = undefined;
        if (isMounted) setHubspotEmbedGeneration((n) => n + 1);
      }, POST_EMBED_SYNC_DELAY_MS);
    };

    const dispose = () => {
      isMounted = false;
      if (bumpTimer !== undefined) window.clearTimeout(bumpTimer);
    };

    const createForm = () => {
      if (!isMounted || !window.hbspt?.forms) return;
      const targetElement = document.getElementById(TARGET_ID);
      if (!targetElement) return;
      targetElement.innerHTML = "";
      window.hbspt.forms.create({
        portalId: PORTAL_ID,
        formId: FORM_ID,
        region: REGION,
        target: `#${TARGET_ID}`,
      });
      bumpEmbedGeneration();
    };

    const existingScript = document.getElementById(
      HUBSPOT_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (window.hbspt?.forms) {
      createForm();
      return dispose;
    }

    if (existingScript) {
      existingScript.addEventListener("load", createForm);
      existingScript.addEventListener("error", () => setLoadError(true));
      return () => {
        existingScript.removeEventListener("load", createForm);
        dispose();
      };
    }

    const script = document.createElement("script");
    script.id = HUBSPOT_SCRIPT_ID;
    script.src = HUBSPOT_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", createForm);
    script.addEventListener("error", () => setLoadError(true));
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", createForm);
      dispose();
    };
  }, []);

  const showOuterChrome = loadError || formDomReady;

  return (
    <div className={cn(className, "hidden")}>
      <div id={TARGET_ID} className="hs-form-wrapper w-full" />
      {loadError ? (
        <p className="pt-2 text-center text-[12px] text-red-600">
          We could not load the form right now. Please refresh and try again.
        </p>
      ) : null}
    </div>
  );
}
