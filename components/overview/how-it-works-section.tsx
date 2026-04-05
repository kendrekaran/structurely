import React from "react";

const features = [
  {
    title: "Human-like AI Calls with Leads",
    description:
      "Human-like AI voice agents handle inbound and outbound lead qualification calls, engage prospects naturally, and capture sales-ready opportunities.",
    highlighted: true,
  },
  {
    title: "Texting + Drip Campaigns",
    description:
      "AI text messaging and drip campaigns automate follow-up, support two-way SMS conversations, and keep leads engaged throughout the sales funnel.",
    highlighted: false,
  },
  {
    title: "Live Transfers",
    description:
      "Real-time live transfers route qualified leads directly to your sales team, improving response speed, connection rates, and conversion opportunities.",
    highlighted: false,
  },
  {
    title: "Appointment Setting",
    description:
      "AI appointment setting automates scheduling for qualified leads, integrates with calendars and CRMs, and helps sales teams book more meetings.",
    highlighted: false,
  },
];

function FlowDiagramPlaceholder() {
  return (
    <div className="flex h-full items-center justify-center px-8 py-12">
      <p className="max-w-[22em] text-center text-[#646464]">
        A clean animated flow diagram that reinforces{" "}
        <strong className="font-semibold text-[#202020]">"system thinking."</strong>
      </p>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="px-global">
      <section
        id="how-it-works"
        className="max-w-global mx-auto border-x border-[#E5E7EB]"
      >
        <div className="flex flex-col items-center justify-center border-b border-[#E5E7EB] px-6 py-16 md:px-24">
          <h2 className="max-w-[10em] text-center">How it works</h2>
        </div>

        <div className="flex flex-col border-b border-[#E5E7EB] lg:flex-row">
          <div className="flex flex-col divide-y divide-[#E5E7EB] border-b border-[#E5E7EB] lg:w-[38%] lg:border-b-0 lg:border-r lg:border-r-[#E5E7EB]">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`flex flex-col gap-2 px-8 py-6 ${feature.highlighted ? "bg-white" : "bg-[#FAFAFA]"}`}
              >
                <h3 className="text-[1rem] font-medium leading-6 tracking-[-0.02em] text-[#202020]">
                  {feature.title}
                </h3>
                <p className="text-[0.875rem] leading-5 tracking-[-0.01em] text-[#646464]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-1">
            <FlowDiagramPlaceholder />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorksSection;
