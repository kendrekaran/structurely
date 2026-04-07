import Button from "@/components/_ui/button";

export default function PricingCtaSection() {
  return (
    <section id="pricing-cta" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-6 px-6 py-12 text-center md:px-12">
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="max-w-[16em] text-[28px] leading-[36px] tracking-[-0.003em] md:tracking-[-0.03em]">
                Not sure which plan fits?
              </h2>
              <p className=" text-[14px] leading-6 tracking-[-0.01em] text-[#646464]">
                Talk to our team. We&apos;ll match you to the right plan based
                on your lead volume and team size.
                <br className="hidden sm:block" />
                Usage-based means you only pay as the AI delivers value.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="md">
                Book a Demo
              </Button>
              <button className="cursor-pointer rounded-[12px] bg-white px-5 py-3 text-[14px] font-medium leading-5 text-[#646464] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] transition-all hover:bg-gray-50 active:scale-[0.98]">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
