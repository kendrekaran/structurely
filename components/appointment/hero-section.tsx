import Button from "@/components/_ui/button";
import HeroBadge from "../_ui/hero-badge";
import Link from "next/link";

function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 py-[40px] md:py-[80px] px-[12px] md:px-0">
            <div className="flex flex-col items-center gap-3.5">
              <HeroBadge text="Every lead. Every follow-up. Every time." />

              <h1 className="max-w-[342px] sm:max-w-[18em] text-center">
              Get appointments with your{" "}
                <span className="text-[#006FFF]">highest-quality leads.</span>
              </h1>

              <p className="max-w-[39em] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] font-normal teext-[#646464] tracking-[-0.01em] text-center">
              AI uses qualifying conversation to determine the leads that you should be meeting with and schedules appointments for you directly in your CRM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/**
 * Hero Section
 */
export default HeroSection;
