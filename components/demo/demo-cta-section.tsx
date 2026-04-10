import Button from "@/components/_ui/button";
import Link from "next/link";

export default function DemoCtaSection() {
  return (
    <section
      id="demo-cta"
      className="relative z-0 border-b border-[#E5E7EB] bg-white"
    >
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-3 border-t border-[#E5E7EB] px-6 py-6 text-center md:px-24">
            <p className="text-[14px] leading-[20px]">
              This is not a{" "}
              <span className="text-heading text-[14px] leading-[20px]">
                scripted demo.
              </span>
            </p>
            <div
              className="text-base leading-6 font-bold tracking-[-0.02em] text-[#202020]"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              You are interacting with the{" "}
              <span className="text-[#006FFF]">real system.</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 border-t border-[#E5E7EB] px-6 py-6 md:flex-row md:px-24">
            <Link href="/demo">
              <Button variant="primary" size="md">
                Try the Live Demo Now
              </Button>
            </Link>
            <Button variant="secondary" size="md" className="text-foreground">
              Schedule a Guided Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
