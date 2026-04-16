import Button from "@/components/_ui/button";
import { cn } from "@/lib/utils";

type Feature = string;

type PricingPlan = {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceLabel?: string;
  startingAt?: string;
  setupFee?: string;
  customPricingLines?: string[];
  description: string;
  featuresLabel: string;
  featuresLabelHighlight?: boolean;
  features: Feature[];
  popular?: boolean;
};

const plans: PricingPlan[] = [
  {
    id: "individual",
    name: "Individual",
    price: "$0.20",
    priceLabel: "/credit",
    startingAt: "$99/mo",
    setupFee: "$1,500",
    description:
      "For solo producers working 50–1,000 leads/month who want an AI employee that never sleeps.",
    featuresLabel: "What's included",
    features: [
      "2 AI agents built & configured for you",
      "Unlimited self-built agents via agent builder",
      "SMS, email & voice outreach",
      "Local area code numbers",
      "60-day dedicated Account Manager",
      "Spam mitigation & caller ID protection",
    ],
  },
  {
    id: "team",
    name: "Team",
    badge: "Save 40% vs. Individual",
    price: "$0.12",
    priceLabel: "/credit",
    startingAt: "$499/mo",
    setupFee: "$2,500",
    description:
      "For teams of 2–10 ready to turn AI into their unfair advantage.",
    featuresLabel: "Everything in Individual, plus:",
    featuresLabelHighlight: true,
    features: [
      "4 AI agents built & configured for you",
      "Multi-agent workflows & routing",
      "Advanced campaign management",
      "Live transfer optimization",
      "Priority support",
      "Team-level analytics dashboard",
    ],
    popular: true,
  },
  {
    id: "company",
    name: "Company",
    badge: "Save 60% vs. Individual",
    price: "$0.08",
    priceLabel: "/credit",
    startingAt: "$999/mo",
    setupFee: "$2,500",
    description:
      "For organizations with 10+ producers running multiple teams, verticals, and lead channels.",
    featuresLabel: "Everything in Team, plus:",
    features: [
      "Custom agent configurations",
      "Advanced analytics & BI reporting",
      "Dedicated success manager",
      "Volume credit discounts",
      "Multi-team permission controls",
      "Custom integrations & webhooks",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    customPricingLines: ["Custom pricing", "Custom platform fee"],
    description:
      "Custom SLAs, dedicated infrastructure, and tailored AI models. Built around your business.",
    featuresLabel: "Everything in Company, plus:",
    features: [
      "Custom SLAs & uptime guarantees",
      "Custom compliance & security review",
      "Executive business reviews",
      "Dedicated AI model fine-tuning",
      "Unlimited agent configurations",
      "Priority engineering support",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M5.625 10.8861L8.25 13.5423L14.375 6.45898"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanBadge({
  text,
  variant,
}: {
  text: string;
  variant: "blue-outline" | "gray-outline";
}) {
  if (variant === "blue-outline") {
    return (
      <span className="flex items-center rounded-md bg-white px-2 py-1 text-[10px] leading-[14px] font-medium text-[#006FFF] shadow-[0_0_0_1px_rgba(0,86,198,0.08),0_1px_1px_-0.5px_rgba(0,86,198,0.05),0_3px_3px_-1.5px_rgba(0,86,198,0.05),0_6px_6px_-3px_rgba(0,86,198,0.05),0_12px_12px_-6px_rgba(0,86,198,0.05)]">
        {text}
      </span>
    );
  }
  return (
    <span className="flex items-center rounded-md bg-white px-2 py-1 text-[10px] leading-[14px] font-medium text-[#006FFF] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
      {text}
    </span>
  );
}

export default function PricingComparisonCardsSection() {
  return (
    <section id="pricing-comparison-cards" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col flex-wrap divide-y divide-[#E5E7EB] bg-white md:flex-row lg:divide-y-0">
            {plans.map((plan, index) => {
              const isFirst = index === 0;
              const isLast = index === plans.length - 1;

              return (
                <div
                  key={plan.id}
                  className={cn(
                    "flex flex-col md:w-[50%] lg:w-[25%]",
                    plan.popular
                      ? "relative z-10 overflow-hidden border border-[#006FFF] bg-[#006FFF]/2 md:-mx-px"
                      : [
                          "overflow-hidden bg-white",
                          !isLast ? "md:border-r md:border-[#E5E7EB]" : "",
                        ],
                  )}
                >
                  <div className="flex flex-col gap-3 p-5 md:min-h-[265px]">
                    <div className="flex items-center gap-3">
                      <span className="flex-1 text-base leading-6 font-medium tracking-[-0.096px] text-[#646464]">
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <PlanBadge
                          text={plan.badge}
                          variant={
                            plan.id === "team" ? "blue-outline" : "gray-outline"
                          }
                        />
                      )}
                    </div>

                    <div className="flex items-end gap-1">
                      <span className="text-[32px] leading-8 font-medium tracking-[-0.96px] text-[#202020]">
                        {plan.price}
                      </span>
                      {plan.priceLabel && (
                        <span className="pb-0.5 text-[12px] leading-4 font-medium tracking-[-0.12px] text-[#646464]">
                          {plan.priceLabel}
                        </span>
                      )}
                    </div>

                    {plan.startingAt && (
                      <div className="flex flex-col gap-0">
                        <p className="text-[12px] leading-6 tracking-[-0.12px] text-[#646464]">
                          <span className="font-normal">Starting at · </span>
                          <span className="font-medium text-[#202020]">
                            {plan.startingAt}
                          </span>
                        </p>
                        <p className="text-[12px] leading-6 tracking-[-0.12px] text-[#646464]">
                          <span className="font-normal">One-time setup · </span>
                          <span className="font-medium text-[#202020]">
                            {plan.setupFee}
                          </span>
                        </p>
                      </div>
                    )}

                    {plan.customPricingLines && (
                      <div className="flex flex-col gap-0">
                        {plan.customPricingLines.map((line) => (
                          <p
                            key={line}
                            className="text-[12px] leading-6 font-normal tracking-[-0.12px] text-[#646464]"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}

                    <hr className="border-[#E5E7EB]" />

                    <p className="text-[12px] leading-6 font-medium tracking-[-0.12px] text-[#646464]">
                      {plan.description}
                    </p>
                  </div>

                  <hr className="border-[#E5E7EB]" />

                  <div className="relative flex flex-1 flex-col gap-3 px-5 py-6">
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center">
                        <span className="rounded-md bg-[#006FFF] px-2 py-1 text-[12px] leading-4 font-medium text-white">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <span
                      className={`text-[12px] leading-6 font-medium tracking-[-0.12px] ${
                        plan.featuresLabelHighlight
                          ? "text-[#006FFF]"
                          : "text-[#646464]"
                      }`}
                    >
                      {plan.featuresLabel}
                    </span>

                    <ul className="flex flex-col gap-5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-1">
                          <CheckIcon />
                          <span className="text-[14px] leading-5 font-medium tracking-[-0.084px] text-[#646464]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="border-[#E5E7EB]" />

                  <div className="p-5">
                    <Button
                      variant="outline"
                      size="md"
                      className="w-full! justify-center! text-center"
                      style={
                        plan.popular
                          ? undefined
                          : { color: "#646464", borderColor: "#E5E7EB" }
                      }
                    >
                      Talk to sales for pricing
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
