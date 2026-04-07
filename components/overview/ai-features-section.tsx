import React from "react";
import Image from "next/image";

const statBadgeShadow =
  "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)";

type FeatureCard = {
  statText: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  borderBottom?: boolean;
  imageFirstOnDesktop?: boolean;
};

const featureCards: FeatureCard[] = [
  {
    statText: "50% Lower Sales Overhead",
    heading: "Decrease Staffing Costs.",
    description:
      "Automate your CRM and sales resources with AI-powered appointment setting and calling.",
    imageSrc: "/assets/home/grid-cards/1.png",
    imageAlt: "AI automating CRM tasks, appointments, and sales workflows",
    borderBottom: true,
    imageFirstOnDesktop: true,
  },
  {
    statText: "17% More Qualified Leads",
    heading: "Increase Qualified Connections.",
    description:
      "AI-filtering and qualification lets you focus on your highest quality leads.",
    imageSrc: "/assets/home/grid-cards/2.png",
    imageAlt: "AI lead qualification and filtering visualization",
    borderBottom: true,
  },
  {
    statText: "31% Higher Answer Rate",
    heading: "Increase Response.",
    description:
      "AI-messaging follows up with leads for over 12 months and AI-calling uses local phone numbers that increase trust and answer rates.",
    imageSrc: "/assets/home/grid-cards/3.png",
    imageAlt: "AI call lists, messaging, and multi-channel outreach",
    imageFirstOnDesktop: true,
  },
];

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

function FeatureRow({
  statText,
  heading,
  description,
  imageSrc,
  imageAlt,
  borderBottom,
  imageFirstOnDesktop,
}: FeatureCard) {
  return (
    <div
      className={
        borderBottom
          ? "grid grid-cols-1 border-b border-[#E5E7EB] lg:grid-cols-2"
          : "grid grid-cols-1 lg:grid-cols-2"
      }
    >
      <div
        className={
          imageFirstOnDesktop
            ? "order-2 min-w-0 h-[260px] sm:h-[320px] md:h-[400px] lg:order-1"
            : "order-2 min-w-0 h-[260px] sm:h-[320px] md:h-[400px] lg:order-2"
        }
      >
        <GridCardImage src={imageSrc} alt={imageAlt} />
      </div>
      <div
        className={
          imageFirstOnDesktop
            ? "order-1 flex min-w-0 flex-col justify-center  gap-3 md:gap-4 px-4 py-4 md:py-10 border-b md:border-b-0 sm:px-6 lg:order-2 lg:px-12"
            : "order-1 flex min-w-0 flex-col justify-center gap-3 md:gap-4 px-4 py-4 md:py-10 border-b md:border-b-0 sm:px-6 lg:order-1 lg:px-12"
        }
      >
        <StatBadge text={statText} />
        <div className="flex flex-col gap-3">
          <h2 data-reveal="words" className="text-heading text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium tracking-[-0.03em]">
            {heading}
          </h2>
          <p className="text-[#646464] text-[16px] leading-[26px] tracking-[-0.01em]">
            {description}
          </p>
        </div>
      </div>
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
        {featureCards.map((card) => (
          <FeatureRow key={card.heading} {...card} />
        ))}
      </section>
    </div>
  );
}

export default AiFeaturesSection;
