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
};

const featureCards: FeatureCard[] = [
  {
    statText: "50% Lower Sales Overhead",
    heading: "Decrease Staffing Costs.",
    description:
      "Automate your CRM and sales resources with AI-powered appointment setting and calling.",
    imageSrc: "/assets/home/grid-cards/1.svg",
    imageAlt: "AI automating CRM tasks, appointments, and sales workflows",
  },
  {
    statText: "17% More Qualified Leads",
    heading: "Increase Qualified Connections.",
    description:
      "AI-filtering and qualification lets you focus on your highest quality leads.",
    imageSrc: "/assets/home/grid-cards/2.svg",
    imageAlt: "AI lead qualification and filtering visualization",
  },
  {
    statText: "31% Higher Answer Rate",
    heading: "Increase Response.",
    description:
      "AI-messaging follows up with leads for over 12 months and AI-calling uses local phone numbers that increase trust and answer rates.",
    imageSrc: "/assets/home/grid-cards/3.svg",
    imageAlt: "AI call lists, messaging, and multi-channel outreach",
  },
];

function StatBadge({ text }: { text: string }) {
  return (
    <div
      className="inline-flex w-fit items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-2"
      style={{ boxShadow: statBadgeShadow }}
    >
      <span className="text-center text-xs leading-4 font-medium text-[#006FFF]">
        {text}
      </span>
    </div>
  );
}

function GridCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
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
  index,
}: FeatureCard & { index: number }) {
  const reverseOnDesktop = index % 2 === 1;
  const imageOrder = reverseOnDesktop
    ? "order-2 lg:order-1"
    : "order-2 lg:order-2";
  const textOrder = reverseOnDesktop
    ? "order-1 lg:order-2"
    : "order-1 lg:order-1";

  return (
    <div className="grid grid-cols-1 gap-px lg:grid-cols-2">
      <div
        className={`${imageOrder} bg-background h-[260px] min-w-0 sm:h-[320px] md:h-[400px]`}
      >
        <GridCardImage src={imageSrc} alt={imageAlt} />
      </div>
      <div
        className={`${textOrder} bg-background flex min-w-0 flex-col justify-center gap-3 px-4 py-4 sm:px-6 md:gap-4 md:py-10 lg:px-12`}
      >
        <StatBadge text={statText} />
        <div className="flex flex-col gap-3">
          <h2
            data-reveal="words"
            className="text-heading text-[24px] leading-[32px] font-medium tracking-[-0.03em] md:text-[32px] md:leading-[40px]"
          >
            {heading}
          </h2>
          <p className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#646464]">
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
        className="max-w-global bg-border mx-auto flex flex-col gap-px border-x border-[#E5E7EB]"
      >
        {featureCards.map((card, index) => (
          <FeatureRow key={card.heading} {...card} index={index} />
        ))}
      </section>
    </div>
  );
}

export default AiFeaturesSection;
