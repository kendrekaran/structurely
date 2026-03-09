"use client";
import HeroBadge from "@/components/_ui/hero-badge";
import Badge from "../_ui/badge";
import Image from "next/image";
import Rive from "@/components/_ui/rive";
import { Fit, Layout } from "@rive-app/react-canvas";

const features = [
  {
    title: "Instant Engagement",
    description: (
      <>
        Calls, texts, and emails within
        <br />
        seconds — 24/7.
      </>
    ),
    image: "/assets/overview/logos/structured-system/1.png",
    rive: "/rive/home/sturcture-system/1.riv",
  },
  {
    title: "Real Conversations",
    description: (
      <>
        Dynamic questioning, objection handling,
        <br />
        natural dialogue.
      </>
    ),
    image: "/assets/overview/logos/structured-system/2.png",
    rive: "/rive/home/sturcture-system/2.riv",
  },
  {
    title: "Intelligent Qualification",
    description: (
      <>
        Structured logic evaluates readiness
        <br />
        and intent in real time.
      </>
    ),
    image: "/assets/overview/logos/structured-system/3.png",
    rive: "/rive/home/sturcture-system/3.riv",
  },
  {
    title: "Automated Follow-Up",
    description: (
      <>
        Persistent multi-touch sequences powered by
        <br />
        AI — including outbound dialing.
      </>
    ),
    image: "/assets/overview/logos/structured-system/4.png",
    rive: "/rive/home/sturcture-system/4.riv",
  },
];

function StructuredSystemSection() {
  return (
    <div className="px-global">
      <section
        id="structured-system"
        className="max-w-global relative mx-auto flex flex-col items-start border-x border-[#E5E7EB]"
      >
        <div className="md:py-section-md flex flex-col items-center justify-center gap-3 self-stretch px-6 py-[24px] md:px-24">
          <div className="flex w-full max-w-[46.375em] flex-col items-center justify-center gap-4">
            <Badge text="What AI 3 Does" />
            <h2 className="max-w-[11.08em] text-center tracking-[-0.03em]">
              A <span className="text-[#006FFF]">Structured</span> System for
              Engagement
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 self-stretch border-t border-[#E5E7EB] sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={[
                "flex flex-col items-center border-[#E5E7EB]",
                index % 2 === 0 ? "sm:border-r" : "",
                index < features.length - 2 ? "border-b" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="self-stretch p-1">
                <div className="flex aspect-[556/240] min-h-[180px] max-w-full items-center justify-center overflow-hidden rounded-md bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                  {/* <Image
                    src={feature.image}
                    alt={feature.title}
                    width={560}
                    height={240}
                    className="h-full w-full object-cover"
                  /> */}

                  <Rive
                    src={feature.rive}
                    className="h-full w-full"
                    layout={
                      new Layout({
                        fit: Fit.Cover,
                        layoutScaleFactor: 1,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 self-stretch py-10 md:px-6">
                <h3 className="text-center">{feature.title}</h3>
                <p className="text-center text-[14px] leading-5 md:max-w-[22.28em] md:text-[14px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StructuredSystemSection;
