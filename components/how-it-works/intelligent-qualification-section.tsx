"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/_ui/badge";

const routingOptions = [
  "Books appointments",
  "Routes to specific reps",
  "Nurtures longer-term leads",
  "Escalates high-intent prospects",
];

const signals = [
  {
    label: "Urgency",
    icon: (
      <Image
        src="/assets/how-it-works/intelligent-section-logos/1.svg"
        alt="Urgency"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Readiness",
    icon: (
      <Image
        src="/assets/how-it-works/intelligent-section-logos/2.svg"
        alt="Readiness"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Budget/timing signals",
    icon: (
      <Image
        src="/assets/how-it-works/intelligent-section-logos/3.svg"
        alt="Budget/timing signals"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Objections",
    icon: (
      <Image
        src="/assets/how-it-works/intelligent-section-logos/4.svg"
        alt="Objections"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Disengagement patterns",
    icon: (
      <Image
        src="/assets/how-it-works/intelligent-section-logos/5.svg"
        alt="Disengagement patterns"
        width={20}
        height={20}
      />
    ),
  },
];

function IntelligentQualificationSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(2);
  return (
    <div className="px-global">
      <section
        id="intelligent-qualification"
        className="max-w-global relative z-0 mx-auto border-x border-[#E5E7EB]"
      >
        <div className="max-w-global pt-section-md mx-auto flex flex-col items-center">
          <div className="flex w-full flex-col items-center gap-3 text-center">
            <h2 className="max-w-[11em]">
              Intelligent Qualification & Decisioning
            </h2>
          </div>

          <div className="flex w-full flex-col items-center">
            <div className="mt-16 flex rounded-t-xl border-t border-r border-l border-[#E5E7EB] bg-white px-3 py-2">
              <span className="text-[14px] leading-5 tracking-[-0.01em] text-[#646464]">
                AI evaluates in real time
              </span>
            </div>

            <div className="flex w-full flex-wrap justify-center gap-6 border-t border-[#E5E7EB] bg-[#FAFAFA] px-6 py-6">
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]"
                >
                  {signal.icon}
                  <span className="text-[14px] leading-5 tracking-[-0.006em] text-[#646464]">
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-[#E5E7EB]" />
              <div className="flex h-[40px] w-[48px] items-center justify-center rounded-[10px] bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 6L12 11L17 6"
                    stroke="#006FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 13L12 18L17 13"
                    stroke="#006FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <div className="flex w-full items-center justify-center border-b border-[#E5E7EB] px-6 py-6">
              <p className="text-center text-[16px] leading-[26px] tracking-[-0.01em]">
                <span className="text-foreground">
                  Based on predefined routing logic,{" "}
                </span>
                <span className="text-heading">the system:</span>
              </p>
            </div>

            <div className="grid w-full grid-cols-1 sm:grid-cols-2">
              {routingOptions.map((option, index) => (
                <div
                  key={option}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex cursor-pointer items-center border-b px-8 py-8 transition-all duration-200 ${
                    selectedIndex === index
                      ? "border-b-2 border-[#006FFF] bg-white sm:border-r sm:border-r-[#E5E7EB]"
                      : "border-b border-[#E5E7EB] hover:bg-gray-50 sm:border-r sm:border-r-[#E5E7EB]"
                  }`}
                >
                  <span
                    className={`text-[16px] leading-[26px] tracking-[-0.01em] ${
                      selectedIndex === index
                        ? "text-[#202020]"
                        : "text-[#646464]"
                    }`}
                  >
                    {option}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntelligentQualificationSection;
