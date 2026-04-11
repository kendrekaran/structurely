"use client";

import AuthPhoneInput from "@/components/_ui/auth-phone-input";
import {
  sanitizeE164Candidate,
  toE164IfValid,
} from "@/components/_ui/phone-e164-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const industryOptions = [
  "Real Estate",
  "Insurance",
  "Finance",
  "Healthcare",
  "Technology",
  "Automotive",
  "Legal",
  "Education",
  "Other",
];

const leadsOptions = [
  "Less than 50",
  "50 - 100",
  "100 - 500",
  "500 - 1,000",
  "1,000+",
];

const crmOptions = [
  "Salesforce",
  "HubSpot",
  "Zoho CRM",
  "Pipedrive",
  "Follow Up Boss",
  "LionDesk",
  "kvCORE",
  "None",
  "Other",
];

export const contactSalesSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("Enter a valid email address."),
  phoneNumber: z
    .string()
    .min(1, "Please enter your phone number.")
    .refine(
      (val) => toE164IfValid(sanitizeE164Candidate(val)) !== undefined,
      "Enter a valid number with country code (e.g. +1).",
    ),
  industry: z.string().min(1, "Please select your industry."),
  leadsPerMonth: z.string().min(1, "Please select an option."),
  crmSystem: z.string().min(1, "Please select a CRM."),
  comments: z.string(),
});

export type ContactSalesFormData = z.infer<typeof contactSalesSchema>;

const defaultValues: ContactSalesFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  industry: "",
  leadsPerMonth: "",
  crmSystem: "",
  comments: "",
};

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75"
        stroke="#646464"
        strokeWidth="1.3125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
        stroke="#646464"
        strokeWidth="1.3125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M16.5 5.25012L9.75675 9.54537C9.52792 9.67828 9.268 9.74829 9.00337 9.74829C8.73875 9.74829 8.47883 9.67828 8.25 9.54537L1.5 5.25012"
        stroke="#646464"
        strokeWidth="1.3125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3.00012H3C2.17157 3.00012 1.5 3.67169 1.5 4.50012V13.5001C1.5 14.3285 2.17157 15.0001 3 15.0001H15C15.8284 15.0001 16.5 14.3285 16.5 13.5001V4.50012C16.5 3.67169 15.8284 3.00012 15 3.00012Z"
        stroke="#646464"
        strokeWidth="1.3125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M12.75 1.49988H5.25C4.42157 1.49988 3.75 2.17145 3.75 2.99988V14.9999C3.75 15.8283 4.42157 16.4999 5.25 16.4999H12.75C13.5784 16.4999 14.25 15.8283 14.25 14.9999V2.99988C14.25 2.17145 13.5784 1.49988 12.75 1.49988Z"
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

function ChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none shrink-0"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="#646464"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-[#006FFF]"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15 24.5L21 30.5L33 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FieldLabel({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <label className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
      {label}
      {required && <span className="text-[#006FFF]"> *</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-[12px] leading-4 text-red-600" role="alert">
      {message}
    </p>
  );
}

const inputClassName =
  "flex-1 text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#202020] placeholder:text-[#646464] bg-transparent outline-none";

type ContactSalesFormProps = {
  className?: string;
};

export function ContactSalesForm({ className }: ContactSalesFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactSalesFormData>({
    resolver: zodResolver(contactSalesSchema),
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onValid = (data: ContactSalesFormData) => {
    const e164 = toE164IfValid(sanitizeE164Candidate(data.phoneNumber));
    const payload = { ...data, phoneNumber: e164 ?? data.phoneNumber };
    console.log("[ContactSalesForm] submission:", payload);
    setSubmitted(true);
  };

  const handleSendAnother = () => {
    reset(defaultValues);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div
        className={`flex w-full max-w-[34.5em] flex-col items-center gap-6 rounded-[12px] bg-[#FAFAFA] px-6 py-10 text-center md:px-10 ${className ?? ""}`}
        role="status"
        aria-live="polite"
      >
        <SuccessIcon />
        <div className="flex flex-col gap-2">
          <p className="text-[18px] leading-[26px] font-medium tracking-[-0.02em] text-[#202020]">
            Thank you — we received your message.
          </p>
          <p className="max-w-[28em] text-[14px] leading-[22px] tracking-[-0.01em] text-[#646464]">
            Our sales team will review what you shared and follow up within one
            business day. We appreciate your interest in Structurely.
          </p>
        </div>
        <button
          type="button"
          onClick={handleSendAnother}
          className="text-[14px] font-medium text-[#006FFF] underline underline-offset-2 hover:text-[#0056CC]"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className={`flex w-full max-w-[34.5em] flex-col gap-6 ${className ?? ""}`}
      noValidate
    >
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <FieldLabel label="First Name" required />
          <FieldError message={errors.firstName?.message} />
          <div className="flex items-center gap-2 rounded-[9px] border border-[#E5E7EB] bg-white px-3 py-3 transition-colors focus-within:border-[#006FFF]">
            <UserIcon />
            <input
              type="text"
              autoComplete="given-name"
              placeholder="Enter your name..."
              className={inputClassName}
              aria-invalid={errors.firstName ? true : undefined}
              {...register("firstName")}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <FieldLabel label="Last Name" required />
          <FieldError message={errors.lastName?.message} />
          <div className="flex items-center gap-2 rounded-[9px] border border-[#E5E7EB] bg-white px-3 py-3 transition-colors focus-within:border-[#006FFF]">
            <UserIcon />
            <input
              type="text"
              autoComplete="family-name"
              placeholder="Enter your name..."
              className={inputClassName}
              aria-invalid={errors.lastName ? true : undefined}
              {...register("lastName")}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <FieldLabel label="Email" required />
          <FieldError message={errors.email?.message} />
          <div className="flex items-center gap-2 rounded-[9px] border border-[#E5E7EB] bg-white px-3 py-3 transition-colors focus-within:border-[#006FFF]">
            <EmailIcon />
            <input
              type="email"
              autoComplete="email"
              placeholder="Your email address"
              className={inputClassName}
              aria-invalid={errors.email ? true : undefined}
              {...register("email")}
            />
          </div>
        </div>
        <div className="relative z-[5] flex min-w-0 flex-1 flex-col gap-2 overflow-visible">
          <FieldLabel label="Phone Number" required />
          <FieldError message={errors.phoneNumber?.message} />
          <div className="flex items-center  overflow-visible rounded-[9px] border border-[#E5E7EB] bg-white px-3 py-3">
            <PhoneIcon />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <AuthPhoneInput
                  embedded
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                  placeholder="Phone number"
                  autoComplete="tel"
                  aria-invalid={errors.phoneNumber ? true : undefined}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel label="Your Company Industry" required />
        <FieldError message={errors.industry?.message} />
        <div className="relative flex items-center">
          <select
            className="w-full cursor-pointer appearance-none rounded-[9px] border border-[#E5E7EB] bg-white px-3 py-3 pr-8 text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464] transition-colors outline-none focus:border-[#006FFF]"
            aria-invalid={errors.industry ? true : undefined}
            {...register("industry")}
          >
            <option value="" disabled>
              Please Select...
            </option>
            {industryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3">
            <ChevronIcon />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel label="Estimated New Leads Generated Each Month" required />
        <FieldError message={errors.leadsPerMonth?.message} />
        <div className="relative flex items-center">
          <select
            className="w-full cursor-pointer appearance-none rounded-[9px] border border-[#E5E7EB] bg-white px-3 py-3 pr-8 text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464] transition-colors outline-none focus:border-[#006FFF]"
            aria-invalid={errors.leadsPerMonth ? true : undefined}
            {...register("leadsPerMonth")}
          >
            <option value="" disabled>
              Please Select...
            </option>
            {leadsOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3">
            <ChevronIcon />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel label="CRM System You Use" required />
        <FieldError message={errors.crmSystem?.message} />
        <div className="relative flex items-center">
          <select
            className="w-full cursor-pointer appearance-none rounded-[9px] border border-[#E5E7EB] bg-white px-3 py-3 pr-8 text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464] transition-colors outline-none focus:border-[#006FFF]"
            aria-invalid={errors.crmSystem ? true : undefined}
            {...register("crmSystem")}
          >
            <option value="" disabled>
              Please Select...
            </option>
            {crmOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3">
            <ChevronIcon />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel label="Additional Comments or Questions" />
        <textarea
          rows={4}
          className="w-full resize-none rounded-[9px] border border-[#E5E7EB] bg-white px-3 py-3 text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#202020] transition-colors outline-none placeholder:text-[#646464] focus:border-[#006FFF]"
          {...register("comments")}
        />
      </div>

      <button
        type="submit"
        className="rounded-[12px] border border-[#006FFF] bg-[#006FFF] px-3 py-[12px] text-white hover:bg-[#006FFF]/90 sm:px-[20px]"
      >
        Submit
      </button>
    </form>
  );
}
