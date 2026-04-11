import Button from "@/components/_ui/button";
import Link from "next/link";

export default function PricingCtaSection() {
  return (
    <section id="pricing-cta" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global bg-white mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-6 px-6 py-12 text-center md:px-12">
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 data-reveal="words" className="max-w-[16em] text-[28px] leading-[36px] tracking-[-0.003em] md:tracking-[-0.03em]">
                Not sure which plan fits?
              </h2>
              <p className=" text-[14px] leading-6 tracking-[-0.01em] text-[#646464]">
                Talk to our team. We&apos;ll match you to the right plan based
                on your lead volume and team size.
                <br className="hidden sm:block" />
                Usage-based means you only pay as the AI delivers value.
              </p>
            </div>

            <div className="flex  items-center justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="md" className="w-auto md:w-full">
                  <span className="w-fit">Request a demo</span>
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="md" className="  ">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
