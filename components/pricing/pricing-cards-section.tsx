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
  ctaVariant: "secondary" | "outline";
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
    ctaVariant: "secondary",
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
    ctaVariant: "secondary",
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
    ctaVariant: "secondary",
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
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M3 8L6.5 11.5L13 5"
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

export default function PricingCardsSection({ billing }: PricingCardsSectionProps) {
  return (
    <section id="pricing-cards" className="relative z-0 bg-white">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB] border border-[#E5E7EB] rounded-xl overflow-hidden">
            {plans.map((plan) => (
              <div key={plan.id} className="flex flex-col divide-y divide-[#E5E7EB]">
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-medium leading-5 text-[#202020]">
                      {plan.name}
                    </span>
                    {plan.popular && (
                      <span className="px-2 py-0.5 rounded-full bg-[#EEF5FF] text-[#006FFF] text-[12px] font-medium leading-4">
                        Popular
                      </span>
                    )}
                  </div>

                  {plan.custom ? (
                    <div className="text-[#202020]">
                      <span className="text-[40px] font-medium leading-[48px] tracking-[-0.04em]">
                        Custom
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1 text-[#202020]">
                      <span className="text-[36px] font-medium leading-[44px] tracking-[-0.04em]">
                        ${getDisplayPrice(plan, billing)}
                      </span>
                      <span className="text-[14px] text-[#646464] leading-5">/mo</span>
                    </div>
                  )}

                  <p className="text-[13px] leading-[20px] text-[#646464] tracking-[-0.01em]">
                    {plan.description}
                  </p>

                  <Button
                    variant={plan.ctaVariant}
                    size="md"
                    className="w-full flex justify-center"
                  >
                    {plan.cta}
                  </Button>
                </div>

                <div className="flex flex-col gap-3 p-6">
                  <span className="text-[13px] text-[#646464] leading-5 tracking-[-0.01em]">
                    {plan.featuresLabel}
                  </span>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="text-[13px] leading-5 text-[#202020] tracking-[-0.01em]">
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
