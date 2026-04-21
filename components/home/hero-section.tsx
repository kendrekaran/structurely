import Button from "@/components/_ui/button";
import HeroBadge from "../_ui/hero-badge";
import Link from "next/link";

function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 px-[12px] py-[40px] md:px-0 md:py-[80px]">
            <div className="flex flex-col items-center gap-3.5">
              <HeroBadge text="Every lead. Every follow-up. Every time." />

              <h1
                data-reveal="words"
                className="max-w-[342px] text-center sm:max-w-[11em]"
              >
                AI platform that moves the{" "}
                <span className="text-[#006FFF]">right leads</span> forward
              </h1>

              <p className="max-w-[38em] text-center text-[16px] leading-[26px] tracking-[-0.01em] sm:text-[18px] sm:leading-[28px]">
                <span className="text-[#202020]">Structurely</span> integrates
                with your CRM and helps businesses capture, qualify, follow up
                and convert{" "}
                <span className="text-[#202020]">
                  inbound demand — automatically
                </span>{" "}
                and at scale.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="md">
                Explore Our Products
              </Button>
              <Link href="/how-it-works">
                <Button variant="secondary" size="md">
                  See how It Works
                </Button>
              </Link>
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
