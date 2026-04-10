"use client";

import { RiveScrollNumberStates } from "@/components/_ui/rive-scroll-number-states";

type Feature = {
  title: string;
  description: string;
  flowSteps: string[];
};

const features: Feature[] = [
  {
    title: "Human-like AI calls with leads",
    description:
      "Human-like AI voice agents handle inbound and outbound lead qualification calls, engage prospects naturally, and capture sales-ready opportunities.",
    flowSteps: ["Ring", "AI dialog", "Score", "CRM log"],
  },
  {
    title: "Texting + drip campaigns",
    description:
      "AI text messaging and drip campaigns automate follow-up, support two-way SMS conversations, and keep leads engaged throughout the sales funnel.",
    flowSteps: ["Trigger", "Drip", "Reply", "Re-engage"],
  },
  {
    title: "Live transfers",
    description:
      "Real-time live transfers route qualified leads directly to your sales team, improving response speed, connection rates, and conversion opportunities.",
    flowSteps: ["Qualify", "Warm intro", "Bridge", "Agent"],
  },
  {
    title: "Appointment setting",
    description:
      "AI appointment setting automates scheduling for qualified leads, integrates with calendars and CRMs, and helps sales teams book more meetings.",
    flowSteps: ["Intent", "Slots", "Book", "Remind"],
  },
];

function HowItWorksSection() {
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

        <div className="w-full">
          <RiveScrollNumberStates
            items={features.map((f) => ({
              title: f.title,
              description: f.description,
              features: f.flowSteps,
            }))}
          />
        </div>
      </section>
    </div>
  );
}

export default HowItWorksSection;
