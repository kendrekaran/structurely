"use client";

import { useEffect, useState } from "react";

const HUBSPOT_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";
const HUBSPOT_SCRIPT_ID = "hs-forms-v2-script";

const PORTAL_ID = "5109119";
// const FORM_ID = "7b318854-532b-4552-a161-c6e952e13c75";
const FORM_ID = "1cb9d276-9280-4e85-9aac-29f9773cb7d8";
const REGION = "na1";
/** Matches HubSpot embed `target: "#hubspot-form"` — must be unique on the page. */
const TARGET_ID = "hubspot-form";

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

export function AiCallForm({ className }: AiCallFormProps) {
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

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
    };

    const existingScript = document.getElementById(
      HUBSPOT_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (window.hbspt?.forms) {
      createForm();
      return () => {
        isMounted = false;
      };
    }

    if (existingScript) {
      existingScript.addEventListener("load", createForm);
      existingScript.addEventListener("error", () => setLoadError(true));
      return () => {
        isMounted = false;
        existingScript.removeEventListener("load", createForm);
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
      isMounted = false;
      script.removeEventListener("load", createForm);
    };
  }, []);

  return (
    <div className={className}>
      <div id={TARGET_ID} className="hs-form-wrapper w-full" />
      {loadError ? (
        <p className="pt-2 text-center text-[12px] text-red-600">
          We could not load the form right now. Please refresh and try again.
        </p>
      ) : null}
    </div>
  );
}
