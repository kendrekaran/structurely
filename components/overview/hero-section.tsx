import Button from "@/components/_ui/button";
import HeroBadge from "../_ui/hero-badge";

function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 py-[80px]">
            <div className="flex flex-col items-center gap-3.5">
              <h1 className="max-w-[18em] text-center text-[40px] leading-[48px] tracking-[-0.04em]">
                AI That Captures, Qualifies, Follows Up, and Converts Inbound
                Demand.
              </h1>

              <p className="max-w-[38em] text-center">
                <span className="text-[#202020]">Structurely AI 3</span> helps
                businesses capture, qualify, follow-up and convert inbound{" "}
                <span className="text-[#202020]">demand — automatically</span>{" "}
                inside your existing CRM.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="md">
                Request a demo
              </Button>
              <Button variant="secondary" size="md">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
