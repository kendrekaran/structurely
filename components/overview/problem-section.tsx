"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import Badge from "@/components/_ui/badge";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Desktop dashboard stack: each layer scrubs on scroll at a different rate / direction. */
function ProblemDashboardStack() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const l1 = layer1Ref.current;
      const l2 = layer2Ref.current;
      const l3 = layer3Ref.current;
      if (!wrap || !l1 || !l2 || !l3) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        const scroll = {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.15,
          invalidateOnRefresh: true,
        } as const;

        gsap.to(l1, {
          y: -52,
          ease: "none",
          scrollTrigger: { ...scroll },
        });
        gsap.to(l2, {
          y: -160,
          ease: "none",
          scrollTrigger: { ...scroll },
        });
        gsap.to(l3, {
          y: 64,
          ease: "none",
          scrollTrigger: { ...scroll },
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: wrapRef },
  );

  return (
    <div
      ref={wrapRef}
      className="relative z-0 hidden overflow-hidden border-t border-[#E5E7EB] md:block"
    >
      <div ref={layer1Ref} className="will-change-transform">
        <Image
          src="/assets/home/dashboard/dashboard1.png"
          alt="Structurely dashboard with lead metrics, activity chart, and pipeline overview"
          width={2256}
          height={960}
          className="h-auto w-full max-w-5xl"
          sizes="(max-width: 768px) 100vw, min(1024px, 100vw)"
        />
      </div>
      <div className="absolute top-0 left-1/2 w-full max-w-5xl -translate-x-1/2">
        <div ref={layer2Ref} className="will-change-transform">
          <Image
            src="/assets/home/dashboard/dashboard2.png"
            alt="Structurely dashboard with lead metrics, activity chart, and pipeline overview"
            width={2256}
            height={960}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, min(1024px, 100vw)"
          />
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -z-10 w-full max-w-5xl -translate-x-1/2">
        <div ref={layer3Ref} className="will-change-transform">
          <Image
            src="/assets/home/dashboard/dashboard3.png"
            alt="Structurely dashboard with lead metrics, activity chart, and pipeline overview"
            width={2256}
            height={960}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, min(1024px, 100vw)"
          />
        </div>
      </div>
    </div>
  );
}

function OverviewProblemSection() {
  return (
    <section id="overview-problem" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] md:space-y-[64px]">
          <div className="flex flex-col items-center">
            <div className="md:pt-section-md flex w-full flex-col items-center gap-3 px-3 py-4 md:gap-4 md:px-6">
              <div className="flex flex-col items-center gap-4">
                <Badge text="Seamless AI tools that convert" />
                <h2 data-reveal="words" className="max-w-[11em] text-center">
                  Get more qualified appointments. <br />
                  <span className="text-[#006FFF]">Grow your revenue.</span>
                </h2>
              </div>
            </div>
          </div>

          <Image
            src="/assets/home/dashboard/dash-mobile.png"
            alt="Structurely dashboard mobile view with lead metrics and activity overview"
            width={342}
            height={217.74}
            className="h-auto w-full border-t border-[#E5E7EB] p-4 md:hidden"
          />
          <ProblemDashboardStack />
        </div>
      </div>
    </section>
  );
}

export default OverviewProblemSection;
