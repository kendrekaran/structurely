"use client";

import { cn } from "@/lib/utils";
import { AsYouType, parsePhoneNumberFromString } from "libphonenumber-js";
import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from "react";

/** Strip to at most one leading + and up to 15 digits (E.164 length limit). */
export function sanitizeE164Candidate(raw: string): string {
  const chars = raw.replace(/[^\d+]/g, "");
  let digits = "";
  let sawPlus = false;

  for (const c of chars) {
    if (c === "+") {
      if (!sawPlus && digits.length === 0) sawPlus = true;
      continue;
    }
    if (c >= "0" && c <= "9") digits += c;
  }

  digits = digits.slice(0, 15);
  if (sawPlus || digits.length > 0) return `+${digits}`;
  return "";
}

function formatInternationalDisplay(candidate: string): string {
  if (candidate === "" || candidate === "+") return candidate;
  const asYouType = new AsYouType();
  let out = "";
  for (const ch of candidate) {
    out = asYouType.input(ch);
  }
  return out;
}

/** Returns canonical E.164 when the number is valid; otherwise `undefined`. */
export function toE164IfValid(candidate: string): string | undefined {
  const parsed = parsePhoneNumberFromString(candidate);
  if (parsed?.isValid()) return parsed.format("E.164");
  return undefined;
}

export type PhoneE164InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "value" | "defaultValue"
> & {
  /** Controlled: sanitized candidate (`+` + up to 15 digits). */
  value?: string;
  defaultValue?: string;
  onChange?: (details: {
    /** Canonical E.164 when valid, e.g. `+12025550123`. */
    e164: string | undefined;
    /** Sanitized candidate always matching internal rules. */
    raw: string;
    isValid: boolean;
  }) => void;
};

export function PhoneE164Input({
  className,
  value: valueProp,
  defaultValue = "",
  onChange,
  placeholder = "+1 202 555 0123",
  ...rest
}: PhoneE164InputProps) {
  const [uncontrolled, setUncontrolled] = useState(() =>
    sanitizeE164Candidate(defaultValue),
  );
  const isControlled = valueProp !== undefined;
  const raw = isControlled ? sanitizeE164Candidate(valueProp) : uncontrolled;
  const display = formatInternationalDisplay(raw);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeE164Candidate(e.target.value);
    if (!isControlled) setUncontrolled(sanitized);
    const e164 = toE164IfValid(sanitized);
    onChange?.({ e164, raw: sanitized, isValid: Boolean(e164) });
  };

  return (
    <input
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      spellCheck={false}
      value={display}
      onChange={handleChange}
      placeholder={placeholder}
      className={cn(
        "w-full bg-transparent font-sans text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-[#202020] outline-none placeholder:text-[#A0A0A0]",
        className,
      )}
      {...rest}
    />
  );
}
