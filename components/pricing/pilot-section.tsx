import Button from "@/components/_ui/button";
import Rive from "@/components/_ui/rive";
import Link from "next/link";

export default function PilotSection() {
  return (
    <section id="pilot" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global py-section-md relative z-0 mx-auto flex flex-col items-center gap-8 border-x border-b-[2px] border-t border-[#E5E7EB] border-b-[#006FFF] bg-white px-3 md:px-0">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-[8px] bg-white px-4 py-2 text-[12px] font-medium leading-4 text-[#646464] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              Get Started Today
            </div>
            <h2 data-reveal="words" className="max-w-[11em] text-center">
              <span className="text-[#646464]">See real results before you </span>
              <span className="text-[#202020]">sign anything.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/demo">
              <Button variant="primary" size="md">
                Book a Demo
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="secondary" size="md">
                Talk to Sales
              </Button>
            </Link>
          </div>
          <p className="text-center text-[#646464]" style={{ maxWidth: `${360 / 14}em` }}>
            Pay only for AI activity. No minimums. No idle charges.
          </p>
          <Rive
            src="/rive/cta.riv"
            className="absolute inset-0 z-[-1] h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
