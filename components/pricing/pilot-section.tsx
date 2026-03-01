import Button from "@/components/_ui/button";

export default function PilotSection() {
  return (
    <section id="pilot" className="relative z-0 border-t border-[#E5E7EB]">
      <div className="px-global">
        <div className="max-w-global py-section-md mx-auto flex flex-col items-center gap-6 border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-3">
            <h2 className="max-w-[10em] text-center">
              Not ready to commit?{" "}
              <span className="">Start with a Pilot.</span>
            </h2>
            <p className="max-w-[30em] text-center">
              All plans include a pilot period to prove unit economics before
              you commit to an annual contract. See real transfer rates, real
              ROI, and real results with your leads before signing long-term.
            </p>
          </div>
          <Button variant="primary" size="md">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
