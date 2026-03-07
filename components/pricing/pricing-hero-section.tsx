"use client";

import HeroBadge from "@/components/_ui/hero-badge";
import Badge from "../_ui/badge";

export type BillingCycle = "monthly" | "annual";

type PricingHeroSectionProps = {
  billing: BillingCycle;
  onBillingChange: (billing: BillingCycle) => void;
};

export default function PricingHeroSection({
  billing,
  onBillingChange,
}: PricingHeroSectionProps) {
  return (
    <section id="pricing-hero" className="relative z-0 ">
      <div className="px-global">
        <div className="max-w-global py-[40px] md:py-section-md pb-[40px] md:pb-[32px] mx-auto flex flex-col items-center gap-8 md:gap-10 border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 md:gap-4">
            <Badge text="Pricing" />
            <div className="flex flex-col items-center gap-3.5 md:gap-4">
              <h2 className="max-w-[11.08em] text-center text-[32px] md:text-[48px] leading-[44px] md:leading-[54px] font-normal md:font-medium tracking-[-0.04em] md:tracking-[-0.03em]">
                Your leads aren&apos;t going cold. They&apos;re being ignored.
              </h2>
              <p className="max-w-[35em] text-center text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] tracking-[-0.01em]">
                Work gets done. You only pay when it does.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
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

            <p className="text-center text-[14px] leading-5 tracking-[-0.01em]">
              <span className="">Save </span>
              <span className=" text-[#202020]">20%</span>
              <span className=""> annually</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
