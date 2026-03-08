import Button from "../_ui/button";

export default function SpamMitigationSection() {
  return (
    <section
      id="spam-mitigation"
      className="relative z-0 "
    >
      <div className="px-global">
        <div className="max-w-global bg-white mx-auto border-x border-b border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-8 px-3 md:px-12 py-6 md:py-[48px]">
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-3">
                <h3 className="text-[28px] leading-[36px] font-medium tracking-[-0.03em]">
                  <span className="text-[#646464]">Spam Mitigation</span>
                  <span className="text-[#202020]"> Service</span>
                </h3>
                <p className="md:max-w-[42em] text-[14px] leading-[24px] tracking-[-0.01em]">
                  Nationwide spam-mitigated, local area code phone numbers to
                  maximize pickup rates and protect your caller reputation.
                </p>
              </div>

              <Button variant="secondary" size="sm" className="w-fit! px-[12px]!">
                <span className="text-[#006FFF]">
                  Minimum $250/mo
                </span>
              </Button>

            </div>
            <div className="flex shrink-0 flex-col items-left md:items-end gap-1">
              <span className="text-[36px] leading-[44px] font-medium tracking-[-0.03em] text-[#006FFF]">
                $8
              </span>
              <span className="text-[16px] leading-[24px] tracking-[-0.006em] text-[#646464]">
                number/mo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
