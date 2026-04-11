"use client";

import Image from "next/image";
import Badge from "@/components/_ui/badge";
import { cn } from "@/lib/utils";
import Separator from "../_ui/separator";

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
  return (
    <div className="px-global">
      <section
        id="intelligent-qualification"
        className="max-w-global relative z-0 mx-auto border-x border-[#E5E7EB]"
      >
        <div className="max-w-global pt-section-md mx-auto flex flex-col items-center">
          <div className="flex w-full flex-col items-center gap-3 text-center">
            <h2 data-reveal="words" className="md:max-w-[10.4em]">
              Intelligent qualification & decisioning
            </h2>
          </div>

          <div className="flex w-full flex-col items-center">
            <div className="mt-6 flex rounded-t-xl border-t border-r border-l border-[#E5E7EB] bg-white px-3 py-2 md:mt-16">
              <span className="text-[14px] leading-5 tracking-[-0.01em]">
                AI evaluates in real time
              </span>
            </div>
            <div className="w-screen">
              <Separator />
            </div>
            <div className="w-full border-[#E5E7EB] bg-[#FAFAFA]">
              {/* Mobile: grouped rows separated by borders; md+: single flex-wrap row */}
              <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-6 md:px-6 md:py-6">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]"
                  >
                    {signal.icon}
                    <span className="text-[14px] leading-5 tracking-[-0.006em]">
                      {signal.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile layout: rows of 2 separated by borders */}
              <div className="flex flex-col md:hidden">
                {/* Row 1: Urgency + Readiness */}
                <div className="flex justify-center gap-4 py-6">
                  {signals.slice(0, 2).map((signal) => (
                    <div
                      key={signal.label}
                      className="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]"
                    >
                      {signal.icon}
                      <span className="text-[14px] leading-5 tracking-[-0.006em]">
                        {signal.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-px w-full bg-[#E5E7EB]" />
                {/* Row 2: Budget/timing signals + Objections */}
                <div className="flex justify-center gap-4 py-6">
                  {signals.slice(2, 4).map((signal) => (
                    <div
                      key={signal.label}
                      className="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]"
                    >
                      {signal.icon}
                      <span className="text-[14px] leading-5 tracking-[-0.006em]">
                        {signal.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-px w-full bg-[#E5E7EB]" />
                {/* Row 3: Disengagement patterns (centered) */}
                <div className="flex justify-center py-6">
                  {signals.slice(4).map((signal) => (
                    <div
                      key={signal.label}
                      className="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]"
                    >
                      {signal.icon}
                      <span className="text-[14px] leading-5 tracking-[-0.006em]">
                        {signal.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-[#E5E7EB]" />
              <div className="flex h-[24px] w-[28.8px] items-center justify-center rounded-[6px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] md:h-[40px] md:w-[48px] md:rounded-[10px] md:p-2">
                <Image
                  src="/assets/overview/logos/chevron-down.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                />
              </div>
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <div className="w-full items-center justify-center border-b border-[#E5E7EB] py-6 md:flex md:px-6">
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
                  className={cn(
                    "group flex cursor-default items-center border-b px-5 py-4 transition-all duration-300 hover:border-b-[#006FFF] hover:bg-white active:border-b-[#006FFF] active:bg-white sm:border-r sm:border-r-[#E5E7EB] md:px-8 md:py-8",
                    index < routingOptions.length - 1
                      ? "border-[#E5E7EB]"
                      : "border-transparent",
                  )}
                >
                  <span className="text-[14px] leading-[24px] tracking-[-0.01em] text-[#646464] transition-colors duration-300 group-hover:text-[#202020] group-active:text-[#202020] md:text-[16px] md:leading-[26px]">
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
