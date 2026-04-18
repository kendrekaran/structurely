"use client";

import AuthPhoneInput from "@/components/_ui/auth-phone-input";
import {
  sanitizeE164Candidate,
  toE164IfValid,
} from "@/components/_ui/phone-e164-input";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Button from "@/components/_ui/button";
import { useAiChatWidgetStore } from "@/stores/ai-chat-widget-store";
import { useLiveDemoAiCallStore } from "@/stores/live-demo-ai-call-store";

export type LiveDemoPhoneRowProps = {
  /** Fires after a valid E.164 number is submitted (Enter or arrow). */
  onSubmitPhone?: (e164: string) => void;
};

/**
 * Original live-demo layout: gray row, inner flex without border, E.164 input, submit arrow as button.
 */
const ERROR_ID = "live-demo-phone-error";

/** Animated bottom edge: same blue → fade as solution tabs / CRM accent lines. */
function LiveDemoAnimatedBorder() {
  return (
    <div
      className="absolute bottom-0 z-0 h-[3px] w-full shrink-0 overflow-hidden bg-[#FAFAFA]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#006FFF]/20 via-transparent to-[#006FFF]/12 transition-opacity duration-300 group-focus-within/live-demo:from-[#006FFF]/35 group-focus-within/live-demo:to-[#006FFF]/22" />
      <div className="absolute top-0 left-1/2 h-full w-[0%] -translate-x-1/2 bg-[#006FFF] opacity-0 transition-all duration-400 group-focus-within/live-demo:w-[100%] group-focus-within/live-demo:opacity-60" />
      <div
        className="animate-live-demo-border-sweep absolute top-0 left-0 h-full w-[100%] bg-linear-to-r from-transparent via-[#006FFF] to-transparent opacity-75 transition-opacity duration-300 motion-reduce:hidden"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

export function LiveDemoPhoneRow({ onSubmitPhone }: LiveDemoPhoneRowProps) {
  const raw = useLiveDemoAiCallStore((s) => s.phoneRaw);
  const setPhoneRaw = useLiveDemoAiCallStore((s) => s.setPhoneRaw);
  const submitted = useLiveDemoAiCallStore((s) => s.submitted);
  const submitLiveDemoPhone = useLiveDemoAiCallStore(
    (s) => s.submitLiveDemoPhone,
  );
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [regionError, setRegionError] = useState<string | null>(null);
  const error = submitError ?? regionError;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const setHomeLiveDemoInView = useAiChatWidgetStore(
    (state) => state.setHomeLiveDemoInView,
  );

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHomeLiveDemoInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      setHomeLiveDemoInView(false);
    };
  }, [setHomeLiveDemoInView]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (regionError) return;
    const candidate = sanitizeE164Candidate(raw);
    const e164 = toE164IfValid(candidate);
    if (!e164) {
      const digitsOnly = candidate.replace(/\D/g, "");
      const message =
        digitsOnly.length === 0
          ? "Please enter your phone number."
          : "Enter a valid number with country code.";
      setSubmitError(message);
      console.warn("[LiveDemo] Invalid phone:", candidate);
      return;
    }
    setSubmitError(null);
    console.log("[LiveDemo] submit:", e164);
    onSubmitPhone?.(e164);
    submitLiveDemoPhone(e164);
  };

  if (submitted) {
    return (
      <div
        ref={wrapperRef}
        className="group/live-demo relative mx-auto my-3 max-w-[250px]"
      >
        <div
          className="flex min-h-[44px] items-center justify-center bg-white px-3 py-1.5"
          role="status"
          aria-live="polite"
        >
          <p className="mx-auto max-w-[16em] text-center text-[14px] leading-[1.4285714285714286] tracking-[-0.01em] text-[#202020]">
            AI is calling you now!
          </p>
        </div>
        <LiveDemoAnimatedBorder />
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="group/live-demo">
      <form
        onSubmit={submit}
        className="relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-1.5"
        noValidate
      >
        {error ? (
          <>
            <span
              id={ERROR_ID}
              role="alert"
              className="col-start-1 row-start-1 px-1.5 pt-1 text-[12px] leading-[16px] text-red-600"
            >
              {error}
            </span>
          </>
        ) : null}
        <div className="col-start-1 row-start-2 flex min-w-0 items-center gap-2 overflow-visible rounded-lg px-1.5 py-3">
          {/* <PhoneIcon /> */}
          <AuthPhoneInput
            embedded
            value={raw}
            onChange={(value) => {
              setPhoneRaw(sanitizeE164Candidate(value));
              setSubmitError(null);
            }}
            onRegionRestrictionError={setRegionError}
            placeholder="Enter your number here"
            aria-label="Phone number"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? ERROR_ID : undefined}
            inputClassName="w-full bg-white font-sans gap-2 self-stretch rounded-[9px]  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(51,51,51,0.05),0px_3px_3px_-1.5px_rgba(51,51,51,0.05),0px_6px_6px_-3px_rgba(51,51,51,0.05),0px_12px_12px_-6px_rgba(51,51,51,0.05),0px_24px_24px_-12px_rgba(51,51,51,0.05)]! px-3 py-3 text-[14px] leading-[20px] font-medium tracking-[-0.006em] text-[#202020] outline-none placeholder:text-[#A0A0A0] "
          />
        </div>

        {/* <button
          type="submit"
          aria-label="Submit phone number"
          className="col-start-2 row-start-2 flex cursor-pointer items-center gap-2 self-center rounded-lg border border-[#E5E7EB] bg-white p-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75012 8.99997H14.2501M14.2501 8.99997L9.00012 3.74997M14.2501 8.99997L9.00012 14.25"
              stroke="#006FFF"
              strokeWidth="1.67143"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}
        <Button
          variant="primary"
          size="md"
          iconOnly
          className="col-start-2 row-start-2 !h-11 !w-11 !min-w-0 !shrink-0 !rounded-[8px] !p-2 sm:!w-11 sm:!justify-center"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
