"use client";

import Button from "@/components/_ui/button";
import { useState } from "react";

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

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75" stroke="#646464" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z" stroke="#646464" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M16.5 5.25012L9.75675 9.54537C9.52792 9.67828 9.268 9.74829 9.00337 9.74829C8.73875 9.74829 8.47883 9.67828 8.25 9.54537L1.5 5.25012" stroke="#646464" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3.00012H3C2.17157 3.00012 1.5 3.67169 1.5 4.50012V13.5001C1.5 14.3285 2.17157 15.0001 3 15.0001H15C15.8284 15.0001 16.5 14.3285 16.5 13.5001V4.50012C16.5 3.67169 15.8284 3.00012 15 3.00012Z" stroke="#646464" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M12.75 1.49988H5.25C4.42157 1.49988 3.75 2.17145 3.75 2.99988V14.9999C3.75 15.8283 4.42157 16.4999 5.25 16.4999H12.75C13.5784 16.4999 14.25 15.8283 14.25 14.9999V2.99988C14.25 2.17145 13.5784 1.49988 12.75 1.49988Z" stroke="#646464" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 13.5H9.00833" stroke="#646464" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 pointer-events-none">
      <path d="M4 6L8 10L12 6" stroke="#646464" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#646464]">
      {label}
      {required && <span className="text-[#006FFF]"> *</span>}
    </label>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    industry: "",
    leadsPerMonth: "",
    crmSystem: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="partners-contact" className="relative z-0 ">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 py-16 px-6 md:px-24">
            <div className="flex flex-col items-center gap-4 w-full max-w-[46.375em]">
              <div className="px-4 py-2 rounded-lg bg-white text-[#646464] text-[12px] font-medium leading-[16px] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                Contact Sales
              </div>
              <h1 data-reveal="words" className="text-center max-w-[13.85em]">
                Let&apos;s improve your{" "}
                <span className="text-[#006FFF]">lead conversion.</span>
              </h1>
            </div>
          </div>

          <div className="relative border-t border-[#E5E7EB] flex flex-col items-center py-10 px-6 md:px-12">
            <svg className="absolute left-0 top-0" height="132" viewBox="0 0 1 132" fill="none" xmlns="http://www.w3.org/2000/svg" width="1">
              <path d="M0.5 0L0.5 132" stroke="url(#contact-gradient)" strokeWidth="1"/>
              <defs>
                <linearGradient id="contact-gradient" x1="0" y1="0" x2="0" y2="132" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#006FFF"/>
                  <stop offset="1" stopColor="#006FFF" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[34.5em]">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <FieldLabel label="First Name" required />
                  <div className="flex items-center gap-2 px-3 py-3 rounded-[9px] border border-[#E5E7EB] focus-within:border-[#006FFF] transition-colors bg-white">
                    <UserIcon />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your name..."
                      className="flex-1 text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#202020] placeholder:text-[#646464] bg-transparent outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <FieldLabel label="Last Name" required />
                  <div className="flex items-center gap-2 px-3 py-3 rounded-[9px] border border-[#E5E7EB] focus-within:border-[#006FFF] transition-colors bg-white">
                    <UserIcon />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your name..."
                      className="flex-1 text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#202020] placeholder:text-[#646464] bg-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <FieldLabel label="Email" required />
                  <div className="flex items-center gap-2 px-3 py-3 rounded-[9px] border border-[#E5E7EB] focus-within:border-[#006FFF] transition-colors bg-white">
                    <EmailIcon />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="flex-1 text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#202020] placeholder:text-[#646464] bg-transparent outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <FieldLabel label="Phone Number" required />
                  <div className="flex items-center gap-2 px-3 py-3 rounded-[9px] border border-[#E5E7EB] focus-within:border-[#006FFF] transition-colors bg-white">
                    <PhoneIcon />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="flex-1 text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#202020] placeholder:text-[#646464] bg-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <FieldLabel label="Your Company Industry" required />
                <div className="relative flex items-center">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full appearance-none px-3 py-3 rounded-[9px] border border-[#E5E7EB] focus:border-[#006FFF] transition-colors bg-white text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#646464] outline-none cursor-pointer pr-8"
                  >
                    <option value="" disabled>Please Select...</option>
                    {industryOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 pointer-events-none">
                    <ChevronIcon />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <FieldLabel label="Estimated New Leads Generated Each Month" required />
                <div className="relative flex items-center">
                  <select
                    name="leadsPerMonth"
                    value={formData.leadsPerMonth}
                    onChange={handleChange}
                    className="w-full appearance-none px-3 py-3 rounded-[9px] border border-[#E5E7EB] focus:border-[#006FFF] transition-colors bg-white text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#646464] outline-none cursor-pointer pr-8"
                  >
                    <option value="" disabled>Please Select...</option>
                    {leadsOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 pointer-events-none">
                    <ChevronIcon />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <FieldLabel label="CRM System You Use" required />
                <div className="relative flex items-center">
                  <select
                    name="crmSystem"
                    value={formData.crmSystem}
                    onChange={handleChange}
                    className="w-full appearance-none px-3 py-3 rounded-[9px] border border-[#E5E7EB] focus:border-[#006FFF] transition-colors bg-white text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#646464] outline-none cursor-pointer pr-8"
                  >
                    <option value="" disabled>Please Select...</option>
                    {crmOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 pointer-events-none">
                    <ChevronIcon />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <FieldLabel label="Additional Comments or Questions" />
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-3 rounded-[9px] border border-[#E5E7EB] focus:border-[#006FFF] transition-colors bg-white text-[14px] font-medium leading-[20px] tracking-[-0.084px] text-[#202020] placeholder:text-[#646464] outline-none resize-none"
                />
              </div>

              <button  className="px-3 sm:px-[20px] py-[12px] hover:bg-[#006FFF]/90 rounded-[12px] bg-[#006FFF] border border-[#006FFF] text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
