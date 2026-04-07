import Badge from "@/components/_ui/badge";

function LeadCaptureHeader() {
  return (
    <div className="px-global">
      <div className="max-w-global border-x border-[#E5E7EB] py-[40px] md:py-section-md mx-auto flex w-full flex-col items-center justify-center gap-3">
        <div className="flex w-full max-w-[46.375em] flex-col items-center gap-[32px] md:gap-4">
          <Badge text="Lead Capture" />
          <h2 data-reveal="words" className="max-w-[11.08em] text-center text-[32px] md:text-[48px] leading-[44px] md:leading-[54px] font-normal md:font-medium tracking-[-0.04em] md:tracking-[-0.03em]">
            Structurely AI activates instantly.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LeadCaptureHeader;
