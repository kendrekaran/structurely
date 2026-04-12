"use client";

import { clsx } from "clsx";
import intlTelInput, { type Iso2, type Iti } from "intl-tel-input";
import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from "react";

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
    },
    ref,
  ) {
    const reactId = useId();
    const id = idProp ?? `auth-phone-${reactId}`;
    const inputRef = useRef<HTMLInputElement>(null);
    const itiRef = useRef<Iti | null>(null);
    const onChangeRef = useRef(onChange);
    const onBlurRef = useRef(onBlur);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    useEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);

    useEffect(() => {
      onBlurRef.current = onBlur;
    }, [onBlur]);

    useEffect(() => {
      const el = inputRef.current;
      if (!el) return;

      const iti = intlTelInput(el, {
        initialCountry: "auto",
        nationalMode: false,
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
        geoIpLookup: (success, failure) => {
          fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data: { country_code?: string }) => {
              const code = data.country_code?.toLowerCase();
              if (code && code.length === 2) {
                success(code as Iso2);
              } else {
                failure();
              }
            })
            .catch(() => {
              failure();
            });
        },
      });
      itiRef.current = iti;

      const syncPhone = () => {
        const itiInstance = itiRef.current;
        if (!itiInstance) return;
        const internationalNumber =
          itiInstance.getNumber() || inputRef.current?.value || "";
        onChangeRef.current(internationalNumber);
      };

      const handleBlur = () => {
        onBlurRef.current?.();
      };

      /**
       * On mobile, tapping the flag button fires touchstart → touchend → click.
       * intl-tel-input uses setTimeout(0) to defer adding its "click off to close"
       * listener on document.documentElement, but when dropdownContainer is
       * document.body the synthesized click from the same tap bubbles up to
       * documentElement *after* that setTimeout fires, instantly closing the
       * dropdown it just opened.
       *
       * Fix: intercept the click on the ITI container (after intl-tel-input's
       * own selectedCountry click listener has already opened the dropdown) and
       * stop it from propagating up to documentElement where the close handler
       * would fire.
       */
      const itiContainer = el.closest(".auth-phone-iti") as HTMLElement | null;

      const stopContainerClickPropagation = (e: MouseEvent) => {
        // Only suppress clicks that originate from the flag/country button.
        const target = e.target as HTMLElement | null;
        if (target?.closest(".iti__selected-country")) {
          e.stopPropagation();
        }
      };

      itiContainer?.addEventListener("click", stopContainerClickPropagation);

      el.addEventListener("input", syncPhone);
      el.addEventListener("countrychange", syncPhone);
      el.addEventListener("blur", handleBlur);

      return () => {
        itiContainer?.removeEventListener(
          "click",
          stopContainerClickPropagation,
        );
        el.removeEventListener("input", syncPhone);
        el.removeEventListener("countrychange", syncPhone);
        el.removeEventListener("blur", handleBlur);
        iti.destroy();
        if (itiRef.current === iti) {
          itiRef.current = null;
        }
      };
    }, [embedded]);

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
          return;
        }
        if (currentNumber !== value) {
          iti.setNumber(value);
        }
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
        aria-invalid={ariaInvalid ?? Boolean(error)}
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
            error
              ? "mb-[-3px] block max-h-6 leading-[140%] text-[#D14343] opacity-100"
              : "m-0 hidden max-h-0 overflow-hidden leading-0 opacity-0",
          )}
        >
          {error || ""}
        </p>
        {inner}
      </div>
    );
  },
);

export default AuthPhoneInput;
export { AuthPhoneInput };
