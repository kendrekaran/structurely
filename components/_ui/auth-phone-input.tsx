"use client";

import { clsx } from "clsx";
import intlTelInput, { type Iti } from "intl-tel-input";
import {
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

/** Must stay in sync with `onlyCountries` passed to intl-tel-input. */
export const AUTH_PHONE_ALLOWED_COUNTRIES = [
  "US",
  "CA",
] as const satisfies readonly CountryCode[];

export const AUTH_PHONE_REGION_ERROR_MESSAGE = "This number is not in range.";

/** When the number is complete and valid but the country is not US or Canada. */
export function getAuthPhoneRegionError(fullNumber: string): string | null {
  const raw = (fullNumber ?? "").trim();
  if (!raw || raw === "+") return null;
  const parsed = parsePhoneNumberFromString(raw);
  if (!parsed?.isValid()) return null;
  const country = parsed.country;
  if (
    country &&
    (AUTH_PHONE_ALLOWED_COUNTRIES as readonly string[]).includes(country)
  ) {
    return null;
  }
  return AUTH_PHONE_REGION_ERROR_MESSAGE;
}

export interface AuthPhoneInputProps {
  id?: string;
  /** Omitted when `embedded` (e.g. partners form uses its own label). */
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  wrapperClassName?: string;
  /** Merged onto the tel input (e.g. layout in a custom row). */
  inputClassName?: string;
  error?: string;
  /** Fits inside an existing bordered row (no label / error in this component). */
  embedded?: boolean;
  onBlur?: () => void;
  name?: string;
  autoComplete?: string;
  "aria-invalid"?: boolean;
  "aria-label"?: string;
  "aria-describedby"?: string;
  /** Called when the allowed-region error changes (embedded UIs should show this). */
  onRegionRestrictionError?: (message: string | null) => void;
  /** Lock to US dial code and prevent editing/removing country code. */
  lockCountryCode?: boolean;
}

const AuthPhoneInput = forwardRef<HTMLInputElement, AuthPhoneInputProps>(
  function AuthPhoneInput(
    {
      id: idProp,
      label = "Phone",
      value,
      onChange,
      placeholder = "Phone number",
      wrapperClassName,
      inputClassName,
      error,
      embedded = false,
      onBlur,
      name,
      autoComplete = "tel",
      "aria-invalid": ariaInvalid,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      onRegionRestrictionError,
      lockCountryCode = false,
    },
    ref,
  ) {
    const reactId = useId();
    const id = idProp ?? `auth-phone-${reactId}`;
    const inputRef = useRef<HTMLInputElement>(null);
    const itiRef = useRef<Iti | null>(null);
    const onChangeRef = useRef(onChange);
    const onBlurRef = useRef(onBlur);
    const onRegionRestrictionErrorRef = useRef(onRegionRestrictionError);
    const [regionRestrictionError, setRegionRestrictionError] = useState<
      string | null
    >(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    useEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);

    useEffect(() => {
      onBlurRef.current = onBlur;
    }, [onBlur]);

    useEffect(() => {
      onRegionRestrictionErrorRef.current = onRegionRestrictionError;
    }, [onRegionRestrictionError]);

    useEffect(() => {
      const el = inputRef.current;
      if (!el) return;

      const iti = intlTelInput(el, {
        initialCountry: "us",
        onlyCountries: ["us", "ca"],
        nationalMode: lockCountryCode,
        separateDialCode: lockCountryCode,
        allowDropdown: !lockCountryCode,
        autoPlaceholder: "aggressive",
        formatOnDisplay: true,
        /** Wider dropdown sized to country names; use CSS min/max-width for bounds. */
        fixDropdownWidth: false,
        /** Never show fullscreen popup — always inline dropdown below input. */
        useFullscreenPopup: false,
        /**
         * Append dropdown to <body> so it escapes any overflow:clip / stacking
         * context ancestors (e.g. overflow-x-clip on <main>). The library
         * positions it via getBoundingClientRect so it still appears below the
         * input on both desktop and mobile.
         */
        dropdownContainer:
          typeof document !== "undefined" ? document.body : undefined,
        loadUtils: () => import("intl-tel-input/utils"),
        containerClass: embedded
          ? "auth-phone-iti auth-phone-iti--embedded"
          : "auth-phone-iti",
      });
      itiRef.current = iti;

      const syncPhone = () => {
        const itiInstance = itiRef.current;
        if (!itiInstance) return;
        const internationalNumber =
          itiInstance.getNumber() || inputRef.current?.value || "";
        const regionMsg = getAuthPhoneRegionError(internationalNumber);
        setRegionRestrictionError(regionMsg);
        onRegionRestrictionErrorRef.current?.(regionMsg);
        onChangeRef.current(internationalNumber);
      };

      const handleBlur = () => {
        onBlurRef.current?.();
      };

      /**
       * iOS Safari dropdown-instant-close fix.
       *
       * Two independent race-conditions conspire to close the dropdown the
       * instant it opens on iPhones:
       *
       * 1. **Click propagation race.**
       *    Tapping the flag button fires touchstart → touchend → (synthesized)
       *    click. intl-tel-input opens the dropdown synchronously on the click,
       *    then uses `setTimeout(0)` to defer adding its "click-off-to-close"
       *    listener on `document.documentElement`. On iOS the synthesized click
       *    reaches documentElement *after* that setTimeout fires, so the
       *    just-registered close handler sees it and shuts the dropdown.
       *
       * 2. **Scroll-triggered close.**
       *    With `useFullscreenPopup:false` + `dropdownContainer:document.body`
       *    intl-tel-input adds a `window "scroll"` listener that immediately
       *    closes the dropdown. When the dropdown opens it focuses the search
       *    input; on iOS this can cause a layout scroll (virtual-keyboard
       *    appearing, scroll-into-view, etc.) which fires the scroll handler.
       *
       * Fix for (1): record a timestamp when the flag button is tapped, then
       * use a **bubble-phase** listener on `document.documentElement` (registered
       * eagerly, i.e. before intl-tel-input's deferred one) that swallows the
       * click via `stopImmediatePropagation` if it arrives within 400 ms of
       * the tap and originates from the flag button.
       *
       * Fix for (2): temporarily suppress the scroll-close by intercepting
       * `window "scroll"` in the capture phase for a short window after the
       * dropdown opens, giving iOS time to settle layout/keyboard changes.
       */

      let lastFlagTapTime = 0;
      const FLAG_TAP_GUARD_MS = 400;

      // Scroll-guard state (declared early because handleFlagClick pre-arms it).
      let suppressScrollClose = false;
      let scrollGuardTimer: ReturnType<typeof setTimeout> | null = null;

      // --- Fix (1): click propagation ---
      // Capture the moment the flag button is tapped (touchend fires before
      // the synthesized click).
      const handleFlagTouchEnd = () => {
        lastFlagTapTime = Date.now();
      };

      const itiContainer = el.closest(".auth-phone-iti") as HTMLElement | null;
      const flagBtn = itiContainer?.querySelector(
        ".iti__selected-country",
      ) as HTMLElement | null;
      flagBtn?.addEventListener("touchend", handleFlagTouchEnd);

      // Also catch pointer/mouse clicks (in case touchend doesn't fire).
      // Additionally pre-arm the scroll guard here so it's active even before
      // the "open:countrydropdown" event fires (covers the narrow window where
      // iOS fires a scroll between focus() and event dispatch).
      const handleFlagClick = () => {
        lastFlagTapTime = Date.now();
        // Pre-arm scroll guard (handleDropdownOpen will refresh the timer).
        suppressScrollClose = true;
        if (scrollGuardTimer) clearTimeout(scrollGuardTimer);
        scrollGuardTimer = setTimeout(() => {
          suppressScrollClose = false;
        }, 600);
      };
      flagBtn?.addEventListener("click", handleFlagClick);

      // Bubble-phase listener on documentElement. Because we register it
      // synchronously (not inside setTimeout), it is registered **before**
      // intl-tel-input's deferred handler, so addEventListener order guarantees
      // ours runs first. We use stopImmediatePropagation to prevent ITI's
      // handler from ever executing for this event.
      const guardDocClick = (e: MouseEvent) => {
        if (Date.now() - lastFlagTapTime < FLAG_TAP_GUARD_MS) {
          const target = e.target as HTMLElement | null;
          if (target?.closest(".iti__selected-country")) {
            e.stopImmediatePropagation();
          }
        }
      };
      document.documentElement.addEventListener("click", guardDocClick);

      // --- Fix (2): scroll-triggered close ---
      // intl-tel-input adds a `window "scroll"` listener (bubble phase) when
      // `!useFullscreenPopup && dropdownContainer` that instantly closes the
      // dropdown. On iOS, focusing the search input or the keyboard appearing
      // triggers a scroll event. We suppress that by using a capture-phase
      // scroll listener on window that calls stopImmediatePropagation during
      // a short guard window after the dropdown opens.
      const handleDropdownOpen = () => {
        suppressScrollClose = true;
        if (scrollGuardTimer) clearTimeout(scrollGuardTimer);
        // Keep suppressing for 600 ms — enough for iOS keyboard animation.
        scrollGuardTimer = setTimeout(() => {
          suppressScrollClose = false;
        }, 600);
      };

      const guardWindowScroll = (e: Event) => {
        if (suppressScrollClose) {
          e.stopImmediatePropagation();
        }
      };

      // Capture phase so it runs before ITI's bubble-phase scroll handler.
      window.addEventListener("scroll", guardWindowScroll, true);

      // Listen for intl-tel-input's custom "open:countrydropdown" event on the
      // input element to know when the dropdown just opened.
      el.addEventListener("open:countrydropdown", handleDropdownOpen);

      el.addEventListener("input", syncPhone);
      el.addEventListener("countrychange", syncPhone);
      el.addEventListener("blur", handleBlur);

      return () => {
        flagBtn?.removeEventListener("touchend", handleFlagTouchEnd);
        flagBtn?.removeEventListener("click", handleFlagClick);
        document.documentElement.removeEventListener("click", guardDocClick);
        window.removeEventListener("scroll", guardWindowScroll, true);
        el.removeEventListener("open:countrydropdown", handleDropdownOpen);
        if (scrollGuardTimer) clearTimeout(scrollGuardTimer);
        el.removeEventListener("input", syncPhone);
        el.removeEventListener("countrychange", syncPhone);
        el.removeEventListener("blur", handleBlur);
        iti.destroy();
        if (itiRef.current === iti) {
          itiRef.current = null;
        }
      };
    }, [embedded, lockCountryCode]);

    useEffect(() => {
      const iti = itiRef.current;
      if (!iti) return;

      void iti.promise.then(() => {
        if (!itiRef.current) return;
        const currentNumber = iti.getNumber();
        if (!value) {
          if (currentNumber) {
            iti.setNumber("");
          }
          setRegionRestrictionError(null);
          onRegionRestrictionErrorRef.current?.(null);
          return;
        }
        if (currentNumber !== value) {
          iti.setNumber(value);
        }
        const next =
          itiRef.current.getNumber() || inputRef.current?.value || "";
        const regionMsg = getAuthPhoneRegionError(next);
        setRegionRestrictionError(regionMsg);
        onRegionRestrictionErrorRef.current?.(regionMsg);
      });
    }, [value]);

    const inner = (
      <input
        id={id}
        ref={inputRef}
        type="tel"
        name={name}
        autoComplete={autoComplete}
        defaultValue={value}
        className={clsx("auth-phone-input iti__tel-input", inputClassName)}
        placeholder={placeholder}
        aria-invalid={ariaInvalid ?? Boolean(error || regionRestrictionError)}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      />
    );

    if (embedded) {
      return (
        <div
          className={clsx(
            "relative z-20 flex min-w-0 flex-1 flex-col items-stretch self-stretch overflow-visible",
            wrapperClassName,
          )}
        >
          {inner}
        </div>
      );
    }

    return (
      <div
        className={clsx(
          "flex flex-col items-start gap-2 self-stretch",
          wrapperClassName,
        )}
      >
        <label htmlFor={id} className="auth-field-label">
          {label}
        </label>
        <p
          className={clsx(
            "text-[12px] font-medium transition-all",
            error || regionRestrictionError
              ? "mb-[-3px] block max-h-6 leading-[140%] text-[#D14343] opacity-100"
              : "m-0 hidden max-h-0 overflow-hidden leading-0 opacity-0",
          )}
        >
          {error || regionRestrictionError || ""}
        </p>
        {inner}
      </div>
    );
  },
);

export default AuthPhoneInput;
export { AuthPhoneInput };
