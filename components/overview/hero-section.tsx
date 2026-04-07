import Button from "@/components/_ui/button";
import HeroBadge from "../_ui/hero-badge";
import Link from "next/link";

function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] px-3 md:px-0">
          <div className="flex flex-col items-center gap-8 py-10 md:py-[48px]">
            <div className="flex flex-col items-center gap-3.5 max-w-[28em] ">
              <h1 className="max-w-[18em] text-center ">
              Convert leads into 
              closed deals <span className="text-[#006FFF]">with AI.</span>
              </h1>

              <p className="max-w-[35em] text-center text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] tracking-[-0.01em]">
              Automate your sales with AI calling, texting, appointment setting, & live phone transfers.
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
