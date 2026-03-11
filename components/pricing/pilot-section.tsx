import Button from "@/components/_ui/button";
import Rive from "@/components/_ui/rive";

export default function PilotSection() {
  return (
    <section id="pilot" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global py-section-md relative z-0 mx-auto flex flex-col items-center gap-6 border-x border-b-[2px] border-[#E5E7EB] border-b-[#006FFF] bg-white px-3 md:px-0">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-foreground max-w-[12em] text-center">
              Not ready to commit?{" "}
              <span className="text-heading">Start with a Pilot.</span>
            </h2>
            <p className="max-w-[36em] text-center">
              All plans include a pilot period to prove unit economics before
              you commit to an annual contract. See real transfer rates, real
              ROI, and real results with your leads before signing long-term.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            className="flex w-[178.8330078125px]! justify-between!"
          >
            Talk to Sales
          </Button>
          <Rive
            src="/rive/cta.riv"
            className="absolute inset-0 z-[-1] h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
