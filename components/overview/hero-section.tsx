import Button from "@/components/_ui/button";
import HeroBadge from "../_ui/hero-badge";
import Link from "next/link";

function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto px-[12px] md:px-0 border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 py-[40px] pb-[24px] md:pb-[80px] md:py-[80px]">
            <div className="flex flex-col items-center gap-3.5">
              <h1 className="max-w-[18em] text-center text-[32px] md:text-[40px] leading-[44px] md:leading-[48px] tracking-[-0.04em]">
                AI That Captures, Qualifies, Follows Up, and Converts Inbound
                Demand.
              </h1>

              <p className="max-w-[35em] text-center text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] tracking-[-0.01em]">
                <span className="text-[#202020]">Structurely AI </span> helps
                businesses capture, qualify, follow-up and convert inbound{" "}
                <span className="text-[#202020]">demand, automatically</span>{" "}
                inside your existing CRM.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="md">
                  Request a demo
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="secondary" size="md">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
