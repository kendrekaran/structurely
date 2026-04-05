import React from "react";
import Image from "next/image";

const statBadgeShadow =
  "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)";

function StatBadge({ text }: { text: string }) {
  return (
    <div
      className="inline-flex w-fit items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-2"
      style={{ boxShadow: statBadgeShadow }}
    >
      <span className="text-center text-xs font-medium leading-4 text-[#006FFF]">
        {text}
      </span>
    </div>
  );
}

function GridCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden ">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}

function AiFeaturesSection() {
  return (
    <div className="px-global">
      <section
        id="ai-features"
        className="max-w-global mx-auto border-x border-[#E5E7EB]"
      >
        <div className="grid grid-cols-1 border-b border-[#E5E7EB] lg:grid-cols-2">
          <div className="min-w-0 h-[400px] ">
            <GridCardImage
              src="/assets/home/grid-cards/1.png"
              alt="AI automating CRM tasks, appointments, and sales workflows"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-4 px-8 py-12 lg:px-12">
            <StatBadge text="50% Lower Sales Overhead" />
            <div className="flex flex-col gap-3">
              <h2>Decrease Staffing Costs.</h2>
              <p>
                Automate your CRM and sales resources with AI-powered
                appointment setting and calling.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border-b border-[#E5E7EB] lg:grid-cols-2">
          <div className="flex min-w-0 flex-col justify-center gap-4 px-8 py-12 lg:px-12">
            <StatBadge text="17% More Qualified Leads" />
            <div className="flex flex-col gap-3">
              <h2>Increase Qualified Connections.</h2>
              <p>
                AI-filtering and qualification lets you focus on your highest
                quality leads.
              </p>
            </div>
          </div>
          <div className="min-w-0 h-[400px] ">
            <GridCardImage
              src="/assets/home/grid-cards/2.png"
              alt="AI lead qualification and filtering visualization"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="min-w-0 h-[400px] ">
            <GridCardImage
              src="/assets/home/grid-cards/3.png"
              alt="AI call lists, messaging, and multi-channel outreach"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-4 px-8 py-12 lg:px-12">
            <StatBadge text="31% Higher Answer Rate" />
            <div className="flex flex-col gap-3">
              <h2>Increase Response.</h2>
              <p>
                AI-messaging follows up with leads for over 12 months and
                AI-calling uses local phone numbers that increase trust and
                answer rates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiFeaturesSection;
