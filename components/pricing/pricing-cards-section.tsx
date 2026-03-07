import Button from "@/components/_ui/button";
import type { BillingCycle } from "./pricing-hero-section";

type Plan = {
  id: string;
  name: string;
  popular?: boolean;
  custom?: boolean;
  monthlyPrice?: number;
  description: string;
  cta: string;
  ctaVariant: "outline";
  ctaCustomStyle?: boolean;
  featuresLabel: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 2499,
    description:
      "For independent brokers, LOs, and small teams looking to automate pipeline follow-up",
    cta: "Get Started",
    ctaVariant: "outline",
    ctaCustomStyle: true,
    featuresLabel: "What's included",
    features: [
      "20,000 Action Credits / mo",
      "$0.10 per credit overage",
      "Pre-built mortgage agent",
      "SMS, email & voice channels",
      "Salesforce integration",
      "Dedicated AM for 60 days",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    popular: true,
    monthlyPrice: 5999,
    description:
      "For brokers processing 10–20k leads/mo who need scale without more headcount",
    cta: "Get Started",
    ctaVariant: "outline",
    featuresLabel: "Everything in Starter, plus",
    features: [
      "60,000 Action Credits / mo",
      "$0.09 per credit overage",
      "Multi-agent workflows",
      "Advanced campaign",
      "Priority support",
      "Live transfer optimization",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 10799,
    description:
      "For high-volume brokers processing 50k+ leads/mo with systems built to convert — matched to their pace",
    cta: "Get Started",
    ctaVariant: "outline",
    ctaCustomStyle: true,
    featuresLabel: "Everything in Growth, plus",
    features: [
      "120,000 Action Credits / mo",
      "$0.08 per credit overage",
      "Custom agent configurations",
      "Analytics & reporting",
      "Dedicated success manager",
      "Volume overage discounts",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    custom: true,
    description:
      "For organizations processing 100k+ leads/mo ready to build a fully custom AI sales operation and competitive moat",
    cta: "Contact Sales",
    ctaVariant: "outline",
    ctaCustomStyle: true,
    featuresLabel: "Everything in Scale, plus",
    features: [
      "Unlimited Action Credits",
      "Custom AI agents built you",
      "Custom voice & personality",
      "Dedicated AI training team",
      "Fine-tuned LLM for playbook",
      "Dedicated AI training team",
    ],
  },
];

function getDisplayPrice(plan: Plan, billing: BillingCycle): string {
  if (!plan.monthlyPrice) return "";
  const price =
    billing === "annual"
      ? Math.floor(plan.monthlyPrice * 0.8)
      : plan.monthlyPrice;
  return price.toLocaleString("en-US");
}

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
        d="M5.625 10.8854L8.25 13.5416L14.375 6.45831"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PricingCardsSectionProps = {
  billing: BillingCycle;
};

export default function PricingCardsSection({
  billing,
}: PricingCardsSectionProps) {
  return (
    <section id="pricing-cards" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] max-md:border-b max-md:border-b-[#E5E7EB]">
          <div className="max-md:scrollbar-hide flex flex-row gap-2 overflow-x-auto p-2 lg:overflow-x-visible [&::-webkit-scrollbar]:max-md:hidden [&>*]:min-w-[272px] lg:[&>*]:min-w-0">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={[
                  "flex flex-1 flex-col gap-6 overflow-hidden rounded-[10px] bg-white  py-6",
                  plan.popular
                    ? "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] max-md:order-first"
                    : "shadow-[0_0_0_1px_rgba(0,0,0,0.08)]",
                ].join(" ")}
              >
                <div className="flex flex-col gap-4 px-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2">
                      <span className="flex-1 text-base leading-6 tracking-[-0.096px] text-[#646464]">
                        {plan.name}
                      </span>
                      {plan.popular && (
                        <span className="rounded-[8px] bg-[#006FFF14] px-2 py-1 text-[12px] leading-4 text-[#006FFF]">
                          Popular
                        </span>
                      )}
                    </div>

                    {plan.custom ? (
                      <span className="text-[32px] leading-8 tracking-[-0.96px] text-[#202020]">
                        Custom
                      </span>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="text-[32px] leading-8 tracking-[-0.96px] text-[#202020]">
                          ${getDisplayPrice(plan, billing)}
                        </span>
                        <span className="pb-0.5 text-base leading-6 font-light tracking-[-0.16px] text-[#646464]">
                          /mo
                        </span>
                      </div>
                    )}

                    <p className="max-w-[14.64rem] text-[12px] leading-6 font-light tracking-[-0.12px] text-[#646464]">
                      {plan.description}
                    </p>
                  </div>

                  <Button
                    variant={plan.ctaVariant}
                    size="md"
                    className="mx-auto flex w-full justify-center px-[67px]"
                    style={
                      plan.ctaCustomStyle
                        ? { color: "#646464", borderColor: "#E5E7EB" }
                        : undefined
                    }
                  >
                    {plan.cta}
                  </Button>
                </div>

                <hr className="border-[#E5E7EB]" />

                <div className="flex flex-col gap-3 px-6">
                  <span className="text-[12px] leading-6 font-light tracking-[-0.12px] text-[#646464]">
                    {plan.featuresLabel}
                  </span>
                  <ul className="flex flex-col gap-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <CheckIcon />
                        <span className="text-[14px] leading-5 tracking-[-0.084px] text-[#646464]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
