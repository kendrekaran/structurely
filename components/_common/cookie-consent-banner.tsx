"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const COOKIE_CONSENT_KEY = "structurely_cookie_consent";

type ConsentState = "accepted" | "declined" | null;

export default function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentState | "loading">("loading");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(
      COOKIE_CONSENT_KEY,
    ) as ConsentState | null;
    if (stored) {
      setConsent(stored);
    } else {
      setConsent(null);
      // slight delay so layout has painted before sliding in
      const t = setTimeout(() => setVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  }

  // Don't render after consent stored (avoids flash)
  if (consent === "loading" || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className={cn(
        "fixed bottom-4 left-1/2 z-[9999] w-[calc(100%-24px)] max-w-[480px] -translate-x-1/2 transition-all duration-500 ease-out",
        "sm:right-6 sm:bottom-6 sm:left-auto sm:translate-x-0",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <div
        className={cn(
          "rounded-[14px] bg-white px-5 py-5",
          "shadow-[0px_24px_24px_-12px_#3333330D,0px_12px_12px_-6px_#3333330D,0px_6px_6px_-3px_#3333330D,0px_3px_3px_-1.5px_#3333330D,0px_1px_1px_-0.5px_#3333330D,0px_0px_0px_1px_#00000014]",
        )}
      >
        {/* Header row */}
        <div className="mb-2 flex items-center gap-2">
          {/* Cookie icon */}
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006FFF]/10 text-[15px]">
            🍪
          </span>
          <p className="font-display text-[15px] leading-[22px] font-medium tracking-[-0.02em] text-[#202020]">
            We use cookies
          </p>
        </div>

        {/* Body */}
        <p className="mb-4 text-[13px] leading-[20px] tracking-[-0.01em] text-[#646464]">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and personalize content. By clicking{" "}
          <span className="font-medium text-[#202020]">"Accept all"</span> you
          consent to our use of cookies.{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-[#006FFF] underline-offset-2 hover:underline"
          >
            Privacy policy
          </a>
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={handleDecline}
            className={cn(
              "flex w-full cursor-pointer items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-white px-4 py-[9px]",
              "text-[13px] leading-[20px] font-medium tracking-[-0.01em] text-[#646464]",
              "transition-colors hover:bg-[#F7F7F8] active:scale-[0.98] sm:w-auto",
            )}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className={cn(
              "flex w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#006FFF] px-4 py-[9px]",
              "text-[13px] leading-[20px] font-medium tracking-[-0.01em] text-white",
              "transition-colors hover:bg-[#006FFF]/90 active:scale-[0.98] sm:w-auto",
            )}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
