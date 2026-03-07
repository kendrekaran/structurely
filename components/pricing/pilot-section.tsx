import Button from "@/components/_ui/button";

export default function PilotSection() {
  return (
    <section id="pilot" className="relative z-0 ">
      <div className="px-global">
        <div
          className="max-w-global py-section-md px-3 md:px-0 mx-auto flex flex-col items-center gap-6 border-x border-b-[2px] border-[#E5E7EB] border-b-[#006FFF]"
          style={{
            backgroundImage: "url('/assets/pricing/pricing-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
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
          <Button variant="primary" size="md">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
