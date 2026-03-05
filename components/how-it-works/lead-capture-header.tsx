import Badge from "@/components/_ui/badge";

function LeadCaptureHeader() {
  return (
    <div className="px-global">
      <div className="max-w-global border-x border-[#E5E7EB] py-section-md mx-auto flex w-full flex-col items-center justify-center gap-3">
        <div className="flex w-full max-w-[46.375em] flex-col items-center gap-4">
          <Badge text="Lead Capture" />
          <h2 className="max-w-[11.08em] text-center">
            Structurely AI activates instantly.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LeadCaptureHeader;
