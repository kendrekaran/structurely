import { LiveDemoPhoneRow } from "@/components/home/live-demo-phone-row";
import Link from "next/link";
function LiveDemoSection() {
  return (
    <section id="live-demo" className="relative z-30">
      <div className="px-global">
        <div className="max-w-global relative mx-auto flex justify-center border-x border-[#E5E7EB]">
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="absolute top-0 left-[6%] h-[44%] w-px bg-[#E5E7EB]" />
            <div className="absolute top-0 left-[22.78%] h-[44%] w-px bg-[#E5E7EB]" />
            <div className="absolute top-0 left-[68.73%] h-[44%] w-px bg-[#E5E7EB]" />
            <div className="absolute top-0 left-[85.51%] h-[44%] w-px bg-[#E5E7EB]" />

            <div className="absolute top-[44%] left-0 h-px w-full bg-[#E5E7EB]" />

            <div className="absolute bottom-0 left-[14.39%] h-[56%] w-px bg-[#E5E7EB]" />
            <div className="absolute bottom-0 left-[28.17%] h-[56%] w-px bg-[#E5E7EB]" />
            <div className="absolute bottom-0 left-[76.12%] h-[56%] w-px bg-[#E5E7EB]" />
            <div className="absolute bottom-0 left-[94.9%] h-[56%] w-px bg-[#E5E7EB]" />
          </div>

          <div className="relative z-10 w-full max-w-[22em] border-x border-[#E5E7EB]">
            <div className="flex items-center justify-center gap-2 border-b border-[#E5E7EB] bg-white px-4 py-3">
              <p className="text-center tracking-[-0.01em]">
                <span className="text-[#646464]">This is not a </span>
                <span className="font-semibold text-[#202020]">
                  scripted demo.
                </span>
                <Link href="/demo" className="text-[#202020]">
                  {" "}
                  Try it now
                </Link>
              </p>
            </div>

            <LiveDemoPhoneRow />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveDemoSection;
