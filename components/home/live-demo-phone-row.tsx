"use client";

import {
  PhoneE164Input,
  sanitizeE164Candidate,
  toE164IfValid,
} from "@/components/_ui/phone-e164-input";
import { useState, type FormEvent } from "react";

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M12.7503 1.49985H5.25031C4.42188 1.49985 3.75031 2.17142 3.75031 2.99985V14.9998C3.75031 15.8283 4.42188 16.4998 5.25031 16.4998H12.7503C13.5787 16.4998 14.2503 15.8283 14.2503 14.9998V2.99985C14.2503 2.17142 13.5787 1.49985 12.7503 1.49985Z"
        stroke="#646464"
        strokeWidth="1.3125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.5H9.00833"
        stroke="#646464"
        strokeWidth="1.3125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type LiveDemoPhoneRowProps = {
  /** Fires after a valid E.164 number is submitted (Enter or arrow). */
  onSubmitPhone?: (e164: string) => void;
};

/**
 * Original live-demo layout: gray row, inner flex without border, E.164 input, submit arrow as button.
 */
const ERROR_ID = "live-demo-phone-error";

export function LiveDemoPhoneRow({ onSubmitPhone }: LiveDemoPhoneRowProps) {
  const [raw, setRaw] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const candidate = sanitizeE164Candidate(raw);
    const e164 = toE164IfValid(candidate);
    if (!e164) {
      const digitsOnly = candidate.replace(/\D/g, "");
      const message =
        digitsOnly.length === 0
          ? "Please enter your phone number."
          : "Enter a valid number with country code.";
      setError(message);
      console.warn("[LiveDemo] Invalid phone:", candidate);
      return;
    }
    setError(null);
    console.log("[LiveDemo] submit:", e164);
    onSubmitPhone?.(e164);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="border-b-[3px] border-transparent bg-white px-3 py-3"
        role="status"
        aria-live="polite"
      >
        <p className="text-center text-[14px] leading-[20px] tracking-[-0.01em] text-[#202020]">
          Thanks, we got your number. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-1.5 border-b-[3px] border-transparent bg-[#FAFAFA] px-3 py-1.5 focus-within:border-[#006FFF]"
      noValidate
    >
      {error ? (
        <>
          <span
            id={ERROR_ID}
            role="alert"
            className="col-start-1 row-start-1 px-1.5 text-[12px] leading-[16px] text-red-600"
          >
            {error}
          </span>
        </>
      ) : null}
      <div className="col-start-1 row-start-2 flex items-center gap-2 rounded-lg px-1.5 py-3">
        <PhoneIcon />
        <PhoneE164Input
          value={raw}
          onChange={(details) => {
            setRaw(details.raw);
            setError(null);
          }}
          placeholder="Enter your number here"
          aria-label="Phone number"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? ERROR_ID : undefined}
          className="w-full bg-transparent font-sans text-[14px] leading-[20px] font-medium tracking-[-0.006em] text-[#202020] outline-none placeholder:text-[#A0A0A0]"
        />
      </div>

      <button
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
      </button>
    </form>
  );
}
