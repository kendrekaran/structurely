import Button from "@/components/_ui/button";

export default function DemoCtaSection() {
  return (
    <section
      id="demo-cta"
      className="relative z-0 border-b border-[#E5E7EB] bg-white"
    >
      <div className="px-global py-10">
        <div className="max-w-global mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-[14px] leading-5 tracking-[-0.01em]">
              This is not a{" "}
              <span className="  text-[#202020]">
                scripted demo.
              </span>
            </div>
            <div
              className="text-[28px] leading-[36px] text-[#202020] sm:text-[32px]"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              You are interacting with the{" "}
              <span className="text-[#006FFF]">real system.</span>
            </div>
          </div>

          <div className="h-px w-full bg-[#E5E7EB]" />

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button variant="primary" size="md">
              Try the Live Demo
            </Button>
            <Button variant="secondary" size="md">
              Schedule a Guided Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
