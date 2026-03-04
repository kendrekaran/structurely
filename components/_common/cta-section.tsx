import Button from "@/components/_ui/button";

interface CtaSectionProps {
  variant?: "default" | "overview";
}

function CtaSection({ variant = "default" }: CtaSectionProps) {
  const isOverview = variant === "overview";

  return (
    <div className="px-global">
      <section
        id="cta"
        className="max-w-global relative z-0 mx-auto border-x border-[#E5E7EB] bg-white"
      >
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/common/footer-bg.png')" }}
        />
        <div className="px-global py-section-md">
          <div className="max-w-global mx-auto">
            <div className="flex flex-col items-center gap-8">
              {isOverview ? (
                <h2 className="max-w-[11.25em] text-center font-medium">
                  <span className="text-[#646464]">Follow-up should be a</span>{" "}
                  <span className="text-[var(--heading)]">
                    system, not a variable.
                  </span>
                </h2>
              ) : (
                <h2 className="max-w-[11.25em] text-center font-medium">
                  <span className="text-[var(--heading)]">
                    If demand is coming in,
                  </span>{" "}
                  <span className="text-[var(--heading)]">
                    it should be converting
                  </span>
                </h2>
              )}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {!isOverview && (
                  <Button variant="primary" size="md">
                    Explore Our Products
                  </Button>
                )}
                <Button
                  variant={isOverview ? "primary" : "secondary"}
                  size="md"
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CtaSection;
