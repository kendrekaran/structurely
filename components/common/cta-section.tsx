import Button from "@/components/ui/button";
import { div } from "motion/react-client";

function CtaSection() {
  return (
    <div className="px-global">
    <section id="cta" className="max-w-global mx-auto bg-white border-x border-[#E5E7EB] relative z-0">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/common/footer-bg.png')" }}
      />
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8">
            <h2 className="max-w-[11.25em] text-center font-medium">
              <span className="text-[var(--foreground)]">If demand is coming in,</span>
              {" "}
              <span className="text-[var(--heading)]">it should be converting</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Button variant="primary" size="md">
                Explore Our Products
              </Button>
              <Button variant="secondary" size="md">
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
