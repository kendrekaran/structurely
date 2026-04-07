import Button from "@/components/_ui/button";
import Rive from "@/components/_ui/rive";
import Link from "next/link";

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
        {/* <div
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/common/footer-bg.png')" }}
        />
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/assets/home/cta/cta-mobile.png')" }}
        /> */}
        <Rive
          src="/rive/cta.riv"
          className="absolute inset-0 z-[-1] h-full w-full"
        />
        <div className="px-global md:py-section-md py-8">
          <div className="max-w-global mx-auto">
            <div className="flex flex-col items-center gap-8">
              <h2 className="max-w-[198px] text-center font-medium md:max-w-[11.25em]">
                <span className="text-[#646464]">Grow your revenue with</span>{" "}
                <span className="text-heading">Structurely.</span>
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {!isOverview && (
                  <Button variant="primary" size="md">
                    Explore Our Products
                  </Button>
                )}
                <Link href="/demo">
                  <Button
                    variant={isOverview ? "primary" : "secondary"}
                    size="md"
                    className=""
                  >
                    <span className="w-[104px] text-left">Try the AI</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CtaSection;
