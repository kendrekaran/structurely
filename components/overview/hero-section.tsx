import Button from "@/components/_ui/button";
import HeroBadge from "../_ui/hero-badge";
import Link from "next/link";

function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] px-3 md:px-0">
          <div className="flex flex-col items-center gap-8 py-10 md:py-[48px]">
            <div className="flex flex-col items-center gap-3.5">
              <h1 data-reveal="words" className="text-center">
                Convert leads into <br /> closed deals{" "}
                <span className="text-[#006FFF]">with Structurely AI.</span>
              </h1>

              <p className="max-w-[26em] text-center text-[16px] leading-[24px] tracking-[-0.01em] md:text-[18px] md:leading-[28px]">
                Automate your sales with AI calling, texting, appointment
                setting, & live phone transfers.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
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
