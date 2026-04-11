import Button from "@/components/_ui/button";
import Link from "next/link";

function InboundDemandSection() {
  return (
    <section id="inbound-demand" className="px-global relative z-0">
      <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
        <div className="relative flex h-[244px] flex-col items-center justify-center gap-8 overflow-hidden bg-white px-[40px] py-[32px] md:h-auto md:px-24">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/home/cta/cta.png')" }}
          />
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: "url('/assets/home/execution.png')" }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center gap-1 md:justify-start">
            <span
              className="hidden text-center text-[24px] leading-[32px] tracking-[-0.02em] md:block"
              style={{ color: "#646464" }}
            >
              Inbound demand doesn&apos;t fail.
            </span>
            <span
              className="text-center text-[24px] leading-[32px] tracking-[-0.02em]"
              style={{ color: "#202020" }}
            >
              Execution does.
            </span>
          </div>
          <div className="relative z-10">
            <Link href="/demo">
            <Button variant="primary" size="md">
              Request a demo
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InboundDemandSection;
