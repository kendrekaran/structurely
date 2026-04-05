import Badge from "@/components/_ui/badge";

function AutomateVideoSection() {
  return (
    <section id="automate-video" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center border-b border-[#E5E7EB] px-6 py-16 md:px-24">
            <div className="flex w-full max-w-[40.375em] flex-col items-center gap-4">
              <Badge text="Automate Your Sales Process" />
              <h2 className="max-w-[11.5em] text-center">
                Focus on the{" "}
                <span className="text-[#006FFF]">most valuable</span>{" "}
                opportunities.
              </h2>
            </div>
          </div>
          <div className="flex min-h-[480px] items-center justify-center border-b-2 border-[#006FFF] bg-white">
            <span className="text-[#646464] text-base tracking-[-0.01em]">VIDEO</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutomateVideoSection;
