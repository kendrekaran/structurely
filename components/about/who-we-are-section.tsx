"use client";
import Rive from "@/components/_ui/rive";
import { Fit, Layout } from "@rive-app/react-canvas";
import Image from "next/image";

function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global md:py-section-md mx-auto flex flex-col items-center gap-4 border-x border-b border-[#E5E7EB] py-[24px] text-center">
          <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
            <span className="text-[12px] leading-4 font-medium">
              Who we are
            </span>
          </div>
          <h2
            data-reveal="words"
            className="max-w-[11em] md:tracking-[-0.03em]"
          >
            Who we are
          </h2>
        </div>
      </div>

      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col items-stretch border-x border-b border-[#E5E7EB] md:flex-row">
          <div className="flex flex-1 flex-col gap-6 border-b border-[#E5E7EB] px-3 py-[24px] md:border-r md:border-b-0 md:px-12 md:py-12">
            <Image
              src="/assets/common/heading-logo.svg"
              alt="Structurely"
              width={115}
              height={24}
              className="h-auto w-[91px]"
            />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020]">
                  Structurely is a software company focused on inbound sales
                  execution.
                </p>
                <p className="max-w-[25.375em] text-[14px] leading-[20px] tracking-[-0.006em]">
                  We have been building and operating AI-driven engagement
                  systems for more than ten years.
                </p>
              </div>

              <hr className="border-[#E5E7EB]" />

              <div className="flex flex-col gap-3">
                <p className="max-w-[27.375em] text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020]">
                  Our work is grounded in real-world sales environments — where
                  response time, follow-up, and consistency directly affect
                  outcomes.
                </p>
                <p className="font-figma-hand text-[16px] leading-6 font-bold tracking-[-0.02em] text-[#006FFF]">
                  We are not new to this space.
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-h-[400px] flex-1 items-stretch p-3 md:min-h-0">
            <div className="flex flex-1 items-center justify-center bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
              <Rive
                src="/rive/home/7.riv"
                className="h-full w-full"
                layout={new Layout({ fit: Fit.Cover, layoutScaleFactor: 1 })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
