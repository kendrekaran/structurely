import Badge from "@/components/_ui/badge";

function SolutionIntroSection() {
  return (
    <section id="solution-intro" className="px-global relative z-0">
      <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
        <div className="md:py-section-md flex flex-col items-center gap-3 px-6 py-12 md:px-24">
          <Badge text="What is Structurely" />
          <h2 className="max-w-[11em] text-center">
            Structurely <span className="text-[#006FFF]">automates</span> the
            middle
          </h2>
          <p className="max-w-[21.5em] text-center">
            The moment a lead enters your system, Structurely engages.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SolutionIntroSection;
