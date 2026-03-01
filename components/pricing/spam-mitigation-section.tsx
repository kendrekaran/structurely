export default function SpamMitigationSection() {
  return (
    <section
      id="spam-mitigation"
      className="relative z-0 bg-[#FAFAFA]"
    >
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">
          <div className="flex items-center justify-between gap-8 px-12 py-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-[28px] leading-9 font-medium tracking-[-0.03em]">
                <span className="text-[#646464]">Spam Mitigation</span>
                <span className="text-[#202020]"> Service</span>
              </h3>
              <p className="max-w-[26em]">
                Nationwide spam-mitigated, local area code phone numbers to
                maximize pickup rates and protect your caller reputation.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className="text-[36px] leading-[44px] font-medium tracking-[-0.03em] text-[#4B7BFF]">
                $8
              </span>
              <span className="text-[16px] leading-6 tracking-[-0.006em] text-[#646464]">
                number/mo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
