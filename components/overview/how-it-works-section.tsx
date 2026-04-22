"use client";

import Image from "next/image";
import {
  RiveScrollNumberStates,
  RiveNumberStateItem,
} from "@/components/_ui/rive-scroll-number-states";
const HOW_IT_WORKS_ICON_BASE =
  "/assets/overview/logos/how-it-works-icons";

function HowItWorksIcon({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      className="max-h-[40px] max-w-[40px] object-contain"
    />
  );
}

const features: RiveNumberStateItem[] = [
  {
    title: "Human-like AI calls with leads",
    description:
      "Human-like AI voice agents handle inbound and outbound lead qualification calls, engage prospects naturally, and capture sales-ready opportunities.",
    features: ["Ring", "AI dialog", "Score", "CRM log"],
    icon: (
      <HowItWorksIcon
        src={`${HOW_IT_WORKS_ICON_BASE}/1.svg`}
        width={32}
        height={28}
      />
    ),
  },
  {
    title: "Texting + drip campaigns",
    description:
      "Structurely AI automate follow-up, support two-way SMS conversations, and keep leads engaged throughout the sales funnel.",
    features: ["Trigger", "Drip", "Reply", "Re-engage"],
    icon: (
      <HowItWorksIcon
        src={`${HOW_IT_WORKS_ICON_BASE}/2.svg`}
        width={24}
        height={21.2}
      />
    ),
  },
  {
    title: "Live transfers",
    description:
      "Real-time live transfers route qualified leads directly to your sales team, improving response speed, connection rates, and conversion opportunities.",
    features: ["Qualify", "Warm intro", "Bridge", "Agent"],
    icon: (
      <HowItWorksIcon
        src={`${HOW_IT_WORKS_ICON_BASE}/3.svg`}
        width={22}
        height={21.99}
      />
    ),
  },
  {
    title: "Appointment setting",
    description:
      "Structurely AI appointment setting automates scheduling for qualified leads, integrates with calendars and CRMs, and helps sales teams book more meetings.",
    features: ["Intent", "Slots", "Book", "Remind"],
    icon: (
      <HowItWorksIcon
        src={`${HOW_IT_WORKS_ICON_BASE}/4.svg`}
        width={20}
        height={20}
      />
    ),
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
            How it works.
          </h2>
        </div>

        <div className="w-full">
          <RiveScrollNumberStates
            items={features}
            iconWrapperClassName="md:hidden"
          />
        </div>
      </section>
    </div>
  );
}

export default HowItWorksSection;
