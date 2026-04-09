"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Feature = {
  title: string;
  description: string;
  flowTitle: string;
  flowSteps: string[];
  flowCaption: string;
};

const features: Feature[] = [
  {
    title: "Human-like AI calls with leads",
    description:
      "Human-like AI voice agents handle inbound and outbound lead qualification calls, engage prospects naturally, and capture sales-ready opportunities.",
    flowTitle: "Voice → qualify → record",
    flowSteps: ["Ring", "AI dialog", "Score", "CRM log"],
    flowCaption:
      "Calls open a structured loop: answer, qualify with natural conversation, score intent, and push outcomes to your stack without manual note-taking.",
  },
  {
    title: "Texting + drip campaigns",
    description:
      "AI text messaging and drip campaigns automate follow-up, support two-way SMS conversations, and keep leads engaged throughout the sales funnel.",
    flowTitle: "SMS drip path",
    flowSteps: ["Trigger", "Drip", "Reply", "Re-engage"],
    flowCaption:
      "Sequences react to behavior—quiet leads get nudges, hot replies jump the queue, and every thread stays in one timeline for the team.",
  },
  {
    title: "Live transfers",
    description:
      "Real-time live transfers route qualified leads directly to your sales team, improving response speed, connection rates, and conversion opportunities.",
    flowTitle: "Warm handoff",
    flowSteps: ["Qualify", "Warm intro", "Bridge", "Agent"],
    flowCaption:
      "When criteria hit, the AI hands off with context so reps pick up already oriented instead of cold-transferring into silence.",
  },
  {
    title: "Appointment setting",
    description:
      "AI appointment setting automates scheduling for qualified leads, integrates with calendars and CRMs, and helps sales teams book more meetings.",
    flowTitle: "Book on the call",
    flowSteps: ["Intent", "Slots", "Book", "Remind"],
    flowCaption:
      "Qualified leads move straight to calendar holds, confirmations, and reminders—fewer no-shows, less back-and-forth email.",
  },
];

function FlowDiagramPanel({ feature }: { feature: Feature }) {
  return (
    <div className="mx-auto flex h-full min-h-[280px] flex-col justify-center gap-6 px-6 py-10 sm:px-8 sm:py-12">
      <p className="text-center text-[11px] font-medium tracking-[0.12em] text-[#646464]">
        {feature.flowTitle}
      </p>
      <div
        className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:gap-x-2"
        aria-hidden
      >
        {feature.flowSteps.map((step, i) => (
          <React.Fragment key={`${feature.title}-${step}`}>
            <span className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-[13px] leading-5 tracking-[-0.02em] whitespace-nowrap text-[#202020] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              {step}
            </span>
            {i < feature.flowSteps.length - 1 ? (
              <span className="px-0.5 text-[14px] text-[#C4C4C4]">→</span>
            ) : null}
          </React.Fragment>
        ))}
      </div>
      <p className="mx-auto max-w-[28em] text-center text-[0.875rem] leading-6 tracking-[-0.01em] text-[#646464]">
        {feature.flowCaption}
      </p>
    </div>
  );
}

function HowItWorksSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = features[selectedIndex];

  return (
    <div className="px-global">
      <section
        id="how-it-works"
        className="max-w-global mx-auto border-x border-[#E5E7EB]"
      >
        <div className="flex flex-col items-center justify-center border-b border-[#E5E7EB] px-4 py-4 md:px-24 md:py-16">
          <h2 data-reveal="words" className="max-w-[10em] text-center">
            How it works
          </h2>
        </div>

        <div className="flex flex-col border-[#E5E7EB] lg:flex-row">
          <div className="flex flex-col divide-y divide-[#E5E7EB] border-b border-[#E5E7EB] lg:w-[38%] lg:border-r lg:border-b-0 lg:border-r-[#E5E7EB]">
            {features.map((feature, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={isSelected}
                  className={cn(
                    "flex w-full cursor-pointer flex-col gap-2 px-4 py-6 text-left transition-colors sm:px-6 md:px-8",
                    "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#006FFF]",
                    isSelected
                      ? "  bg-white"
                      : " border-l-transparent bg-[#FAFAFA] hover:bg-[#FAFAFA]",
                  )}
                >
                  <h3 className="text-[1rem] leading-6 font-medium tracking-[-0.02em] text-[#202020]">
                    {feature.title}
                  </h3>
                  <p className="text-[0.875rem] leading-5 tracking-[-0.01em] text-[#646464]">
                    {feature.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="flex min-h-[280px] flex-1 bg-white lg:min-h-0">
            <FlowDiagramPanel feature={selected} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorksSection;
