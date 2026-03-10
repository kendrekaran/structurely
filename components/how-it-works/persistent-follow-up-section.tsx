"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const featureRows = [
  {
    text: "Executes long-tail follow-up sequences",
    lineWidthClass: "w-[8%]",
    lineColor: "bg-[#202020]",
    arrowFill: "#202020",
    active: true,
  },
  {
    text: "Adjusts messaging over time",
    lineWidthClass: "w-[25%]",
    mobileLineWidth: 32,
    lineColor: "bg-[#E5E7EB]",
    arrowFill: "#E5E7EB",
    active: false,
  },
  {
    text: "Re-engages dormant leads",
    lineWidthClass: "w-[42%]",
    mobileLineWidth: 55,
    lineColor: "bg-[#E5E7EB]",
    arrowFill: "#E5E7EB",
    active: false,
  },
  {
    text: "Tracks responsiveness trends",
    lineWidthClass: "w-1/2",
    mobileLineWidth: 77,
    lineColor: "bg-[#E5E7EB]",
    arrowFill: "#E5E7EB",
    active: false,
  },
];

function ArrowHead({ fill }: { fill: string }) {
  return (
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M3.5 0L6.39711 3.5L3.5 7L0.602886 3.5L3.5 0Z" fill={fill} />
    </svg>
  );
}

function PersistentFollowUpSection() {
  const pinRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileLineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const el = pinRef.current;
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        // markers: true,
        // pin: true,
        // pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            featureRows.length - 1,
            Math.floor(progress * featureRows.length),
          );
          setActiveIndex(index);
        },
      });
    },
    { scope: pinRef },
  );

  useGSAP(
    () => {
      featureRows.forEach((_, i) => {
        const lineEl = lineRefs.current[i];
        const mobileEl = mobileLineRefs.current[i];
        const shouldShow = i <= activeIndex;
        if (lineEl) {
          gsap.to(lineEl, {
            scaleX: shouldShow ? 1 : 0,
            duration: 0.5,
            ease: "power2.out",
            transformOrigin: "left center",
          });
        }
        if (mobileEl) {
          gsap.to(mobileEl, {
            scaleX: shouldShow ? 1 : 0,
            duration: 0.5,
            ease: "power2.out",
            transformOrigin: "left center",
          });
        }
      });
    },
    { dependencies: [activeIndex] },
  );

  return (
    <div className="px-global">
      <section
        id="persistent-follow-up"
        className="max-w-global relative z-0 mx-auto border-x border-[#E5E7EB]"
      >
        <div className="flex flex-col items-center gap-3 px-6 py-[24px] sm:flex-row sm:justify-between md:items-start md:gap-6 md:px-12 md:py-[64px]">
          <h2>
            <span>Persistent </span>
            <span className="text-[#006FFF]">Follow-Up</span>
          </h2>
          <div className="flex shrink-0 flex-col items-center gap-1 md:items-end">
            <span className="text-foreground block text-[16px] leading-[26px] tracking-[-0.01em] md:text-right">
              Most teams stop too early.
            </span>
            <span className="font-figma-hand text-center text-[16px] leading-6 font-bold tracking-[-0.02em] text-[#006FFF] underline">
              AI doesn&apos;t.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-t-xl border-t border-r border-l border-[#E5E7EB] bg-white px-4 py-1">
            <span className="text-foreground text-[14px] leading-5 tracking-[-0.01em]">
              Structurely AI:
            </span>
          </div>
        </div>

        <div className="flex flex-col" ref={pinRef}>
          <div className="divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
            {featureRows.map((row, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={row.text}
                  className="relative flex items-center overflow-hidden py-6"
                >
                  {/* Background layer: fades in when active */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-white transition-opacity duration-300"
                    style={{
                      backgroundImage:
                        "url('/assets/how-it-works/follow-up-bg.png')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right center",
                      backgroundSize: "auto 100%",
                      opacity: isActive ? 1 : 0,
                    }}
                    aria-hidden
                  />
                  {/* Content */}
                  <div className="relative z-10 flex flex-1 items-center">
                    {/* Desktop: variable-width line (animated) + arrow */}
                    <div
                      className={`hidden shrink-0 md:flex ${row.lineWidthClass} items-center`}
                    >
                      <div className="relative min-h-px flex-1 overflow-hidden">
                        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#E5E7EB]" />
                        <div
                          ref={(el) => {
                            lineRefs.current[index] = el;
                          }}
                          className={cn(
                            "absolute top-1/2 left-0 h-px w-full -translate-y-1/2",
                            isActive ? "bg-[#202020]" : "bg-[#E5E7EB]",
                          )}
                          style={{
                            transform: "scaleX(0)",
                            transformOrigin: "left center",
                          }}
                          aria-hidden
                        />
                      </div>
                      <ArrowHead fill={isActive ? "#202020" : "#E5E7EB"} />
                    </div>

                    {/* Mobile: line (animated) + arrow */}
                    <div className="flex shrink-0 items-center pl-3 md:hidden">
                      <div
                        className="relative min-h-px overflow-hidden"
                        style={{ width: row.mobileLineWidth ?? 32 }}
                      >
                        <div className="absolute inset-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#E5E7EB]" />
                        <div
                          ref={(el) => {
                            mobileLineRefs.current[index] = el;
                          }}
                          className={cn(
                            "absolute top-1/2 left-0 h-px w-full -translate-y-1/2",
                            isActive ? "bg-[#202020]" : "bg-[#E5E7EB]",
                          )}
                          style={{
                            transform: "scaleX(0)",
                            transformOrigin: "left center",
                          }}
                          aria-hidden
                        />
                      </div>
                      <ArrowHead fill={isActive ? "#202020" : "#E5E7EB"} />
                    </div>

                    <span
                      className={`ml-3 text-[16px] leading-[26px] tracking-[-0.02em] transition-colors duration-300 ${
                        isActive ? "text-heading" : "text-foreground"
                      }`}
                    >
                      {row.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersistentFollowUpSection;
