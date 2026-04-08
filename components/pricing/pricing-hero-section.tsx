"use client";

import Link from "next/link";
import Button from "@/components/_ui/button";

export type BillingCycle = "monthly" | "annual";

type PricingHeroSectionProps = {
  billing: BillingCycle;
  onBillingChange: (billing: BillingCycle) => void;
};

const checkmarkIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.625 10.8855L8.25 13.5417L14.375 6.45837"
      stroke="#006FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const featureItems = [
  "No cap on leads",
  "Pay only for AI activity",
  "60-day dedicated AM",
  "Cancel anytime",
];

export default function PricingHeroSection({
  billing,
  onBillingChange,
}: PricingHeroSectionProps) {
  return (
    <section id="pricing-hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 pt-10 pb-0 md:gap-10 md:pt-16">
            <div className="flex flex-col items-center gap-4 px-4">
              <div className="inline-flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                <span className="text-center text-[12px] leading-4 font-medium text-[#646464]">
                  Simple, Transparent Pricing
                </span>
              </div>

              <div className="flex flex-col items-center gap-4">
                <h1
                  data-reveal="words"
                  className="max-w-[13.5em] text-center text-[32px] leading-[1.125] font-medium tracking-[-0.03em] text-[#202020] md:text-[48px]"
                >
                  Your leads aren&apos;t going cold. They&apos;re being{" "}
                  <span className="md:text-[#006FFF]">ignored.</span>
                </h1>
                <p className="hidden max-w-[46.375em] text-center text-[18px] leading-[28px] font-medium tracking-[-0.01em] text-[#646464] md:block md:max-w-[41.22em]">
                  AI agents that work every lead, every day — across call, text,
                  and email. Only pay for what the AI actually does.
                </p>
                <p className="block text-center text-[18px] leading-[28px] font-medium tracking-[-0.01em] text-[#646464] md:hidden">
                  Your leads aren&apos;t going cold. They&apos;re being ignored.
                </p>
              </div>
            </div>

            <div className="mx-2 inline-flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <span className="text-center text-[14px] leading-5 font-medium text-[#006FFF]">
                Usage-based · No minimums · No wasted credits
              </span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary">Book a Demo</Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="secondary">See How It Works</Button>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-1 border-t border-[#E5E7EB] bg-white py-6 md:gap-3 md:px-6">
            {featureItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-white px-3 py-2"
              >
                {checkmarkIcon}
                <span className="text-[14px] leading-5 font-medium tracking-[-0.006em] text-[#646464]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
