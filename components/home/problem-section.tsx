import Badge from "@/components/_ui/badge";

function ProblemSection() {
  return (
    <section id="problem" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-t border-[#E5E7EB]">
          <div className="flex flex-col items-center px-[12px] md:px-0 gap-3  py-section-md">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <Badge text="The Problem" />
              <h2 className="max-w-[14em] text-center">
                Most teams don&apos;t lose deals because of{" "}
                <span className="text-[#006FFF]">demand</span>
              </h2>
            </div>
            <p className="max-w-[27.375em] text-center">
              They lose them in the gap between inquiry and action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
