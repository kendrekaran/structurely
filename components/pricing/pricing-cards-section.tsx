import Button from "@/components/_ui/button";
import { SlidingNumber } from "@/components/motion-primitives/sliding-number";
import type { BillingCycle } from "./pricing-hero-section";

type FeatureItem = string | { bold: string; rest: string };

type Plan = {
  id: string;
  name: string;
  popular?: boolean;
  monthlyPrice: number;
  description: string;
  featuresLabel: string;
  features: FeatureItem[];
};

const plans: Plan[] = [
  {
    id: "individual",
    name: "Individual",
    monthlyPrice: 99,
    description:
      "For independent producers ready to automate follow-up and stop losing leads to slow response times.",
    featuresLabel: "What's included",
    features: [
      { bold: "2 AI agents", rest: " built & configured for you" },
      { bold: "Unlimited self-built agents", rest: " via agent builder" },
      { bold: "Local area code numbers", rest: " for higher pickup rates" },
      "SMS, email & voice outreach",
      "Dedicated AM for 60 days",
    ],
  },
  {
    id: "team",
    name: "Team",
    popular: true,
    monthlyPrice: 499,
    description:
      "For growing teams scaling outreach across multiple producers, campaigns, and lead sources.",
    featuresLabel: "Everything in Individual, plus",
    features: [
      { bold: "4 AI agents", rest: " built & configured initially" },
      "Multi-agent workflows",
      "Advanced campaign management",
      "Live transfer optimization",
      "Priority support",
      "Local area code numbers",
    ],
  },
  {
    id: "company",
    name: "Company",
    monthlyPrice: 999,
    description:
      "For high-volume operations running multiple teams, verticals, and lead channels at enterprise scale.",
    featuresLabel: "Everything in Team, plus",
    features: [
      "Custom agent configurations",
      "Advanced analytics & BI reporting",
      "Dedicated success manager",
      "Volume credit discounts",
      "Local area code numbers",
    ],
  },
];

function getPriceValue(plan: Plan, billing: BillingCycle): number {
  return billing === "annual"
    ? Math.floor(plan.monthlyPrice * 0.8)
    : plan.monthlyPrice;
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-0.5 shrink-0"
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
  onBillingChange: (billing: BillingCycle) => void;
};

export default function PricingCardsSection({
  billing,
  onBillingChange,
}: PricingCardsSectionProps) {
  return (
    <section id="pricing-cards" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] max-md:border-b max-md:border-b-[#E5E7EB]">
          <div className="flex w-full flex-col items-center gap-6 px-4 py-6">
            <div className="flex flex-col items-center gap-3">
              <div className="flex rounded-full bg-[rgba(32,32,32,0.08)] p-0.5">
                <button
                  onClick={() => onBillingChange("monthly")}
                  className={`w-24 cursor-pointer rounded-full px-5 py-1.5 text-[14px] leading-5 font-medium transition-all ${
                    billing === "monthly"
                      ? "bg-white text-[#202020] shadow-[0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05)]"
                      : "bg-transparent text-[#202020]"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => onBillingChange("annual")}
                  className={`w-24 cursor-pointer rounded-full px-5 py-1.5 text-[14px] leading-5 font-medium transition-all ${
                    billing === "annual"
                      ? "bg-white text-[#006FFF] shadow-[0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05)]"
                      : "bg-transparent text-[#202020]"
                  }`}
                >
                  Annual
                </button>
              </div>
              <p className="text-center text-[14px] leading-5 tracking-[-0.01em] text-[#646464]">
                Save <span className="text-[#202020]">20%</span> annually
              </p>
            </div>
          </div>
          <div className="max-md:scrollbar-hide  flex flex-row items-center  gap-2 overflow-x-auto p-2 md:pb-4 lg:overflow-x-visible [&::-webkit-scrollbar]:max-md:hidden [&>*]:min-w-[272px] lg:[&>*]:min-w-0">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={[
                  "flex flex-1 flex-col h-[556px] gap-6 overflow-hidden rounded-[10px] bg-white",
                  plan.popular
                    ? "h-[580px] border border-[#006FFF] py-6 shadow-[0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] max-md:order-first"
                    : "py-6 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]",
                ].join(" ")}
              >
                <div className="flex flex-col gap-4 px-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2">
                      <span className="flex-1 text-base font-medium leading-6 tracking-[-0.096px] text-[#646464]">
                        {plan.name}
                      </span>
                      {plan.popular && (
                        <span className="rounded-[8px] bg-[rgba(0,111,255,0.08)] px-2 py-1 text-[12px] font-medium leading-4 text-[#006FFF]">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="flex items-end gap-1">
                      <span className="text-[32px] font-medium leading-8 tracking-[-0.96px] text-[#202020]">
                        $
                      </span>
                      <div className="text-[32px] font-medium leading-8 tracking-[-0.96px] text-[#202020] [&_.leading-none]:leading-8">
                        <SlidingNumber value={getPriceValue(plan, billing)} />
                      </div>
                      <span className="pb-0.5 text-base font-medium leading-6 tracking-[-0.16px] text-[#646464]">
                        /mo
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-[12px] font-normal leading-6 tracking-[-0.12px] text-[#646464]">
                        Platform fee · billed monthly
                      </p>
                      <p className="text-[12px] font-medium leading-6 tracking-[-0.12px] text-[#646464]">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="md"
                    className="flex w-full justify-center"
                    style={
                      !plan.popular
                        ? { color: "#646464", borderColor: "#E5E7EB" }
                        : undefined
                    }
                  >
                    Book a Demo
                  </Button>
                </div>

                <hr className="border-[#E5E7EB]" />

                <div className="flex flex-col gap-3 px-6">
                  <span className="text-[12px] font-medium leading-6 tracking-[-0.12px] text-[#646464]">
                    {plan.featuresLabel}
                  </span>
                  <ul className="flex flex-col gap-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <CheckIcon />
                        <span className="text-[14px] font-medium leading-5 tracking-[-0.084px] text-[#646464]">
                          {typeof feature === "string" ? (
                            feature
                          ) : (
                            <>
                              <span className="text-[#202020]">
                                {feature.bold}
                              </span>
                              {feature.rest}
                            </>
                          )}
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
