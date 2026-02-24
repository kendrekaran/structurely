"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/ui/badge";

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
    <section id="intelligent-qualification" className="max-w-global mx-auto border-x border-[#E5E7EB] relative z-0 ">
      <div className="max-w-global mx-auto flex flex-col items-center pt-section-md">
        <div className="flex flex-col items-center gap-3  w-full text-center">
          <h2 className="max-w-[11em]">
            Intelligent Qualification & Decisioning
          </h2>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="mt-16 flex px-3 py-2 rounded-t-xl border-t border-l border-r border-[#E5E7EB] bg-white">
            <span className="text-[14px] leading-5 tracking-[-0.01em] text-[#646464]">
              AI evaluates in real time
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 px-6 py-6 w-full border-t border-[#E5E7EB] bg-[#FAFAFA]">
            {signals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]"
              >
                {signal.icon}
                <span className="text-[14px] leading-5 tracking-[-0.006em] text-[#646464]">
                  {signal.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-[#E5E7EB]" />
            <div className="flex items-center justify-center p-2 h-[40px] w-[48px] rounded-[10px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6L12 11L17 6" stroke="#006FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 13L12 18L17 13" stroke="#006FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </div>

          <div className="flex justify-center items-center px-6 py-6 w-full border-b border-[#E5E7EB]">
            <p className="text-center text-[16px] leading-[26px] tracking-[-0.01em]">
              <span className="text-foreground">Based on predefined routing logic, </span>
              <span className="text-heading">the system:</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
            {routingOptions.map((option, index) => (
              <div
                key={option}
                onClick={() => setSelectedIndex(index)}
                className={`flex items-center px-8 py-8 border-b cursor-pointer transition-all duration-200 ${
                  selectedIndex === index
                    ? "border-b-2 border-[#006FFF] bg-white sm:border-r sm:border-r-[#E5E7EB]"
                    : "border-b border-[#E5E7EB] hover:bg-gray-50 sm:border-r sm:border-r-[#E5E7EB]"
                }`}
              >
                <span
                  className={`text-[16px] leading-[26px] tracking-[-0.01em] ${
                    selectedIndex === index ? "text-[#202020]" : "text-[#646464]"
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
