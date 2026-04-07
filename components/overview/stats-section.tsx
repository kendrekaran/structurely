"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type StatConfig = {
  end: number;
  suffix: string;
  decimals: number;
  label: string;
  highlight: boolean;
  /** Passed to GSAP as `snap: { value: … }` during the count-up (omit for smooth tween). */
  snap?: number;
};

const stats: StatConfig[] = [
  {
    end: 10,
    suffix: "",
    decimals: 0,
    label: "Years in business",
    highlight: false,
    snap: 0.1,
  },
  {
    end: 400,
    suffix: "M",
    decimals: 0,
    label: "Human fine-tuned conversations",
    highlight: true,
    snap: 25,
  },
  {
    end: 61.1,
    suffix: "%",
    decimals: 1,
    label: "AI conversion rate",
    highlight: false,
    snap: 6.1,
  },
];

function formatStat(value: number, decimals: number, suffix: string) {
  return `${value.toFixed(decimals)}${suffix}`;
}

function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const counters = stats.map((stat, index) => {
        const state = { value: 0 };
        const el = valueRefs.current[index];
        if (el) {
          el.textContent = formatStat(0, stat.decimals, stat.suffix);
        }
        return state;
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      stats.forEach((stat, index) => {
        tl.to(
          counters[index],
          {
            value: stat.end,
            duration: 1.2,
            ease: "power3.out",
            ...(stat.snap !== undefined && stat.snap > 0
              ? { snap: { value: stat.snap } }
              : {}),
            onUpdate: () => {
              const el = valueRefs.current[index];
              if (!el) return;
              el.textContent = formatStat(
                counters[index].value,
                stat.decimals,
                stat.suffix,
              );
            },
            onComplete: () => {
              const el = valueRefs.current[index];
              if (!el) return;
              counters[index].value = stat.end;
              el.textContent = formatStat(stat.end, stat.decimals, stat.suffix);
            },
          },
          index * 0.12,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <div className="px-global">
      <section ref={sectionRef} className="max-w-global mx-auto border-x border-[#E5E7EB] md:py-6">
      
        <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center gap-3 px-6 py-6 md:px-10 md:py-10"
            >
              <span
                ref={(el) => {
                  valueRefs.current[index] = el;
                }}
                className={`text-center text-4xl leading-[1.125] font-medium tracking-[-0.03em] tabular-nums md:text-5xl ${
                  stat.highlight ? "text-[#006FFF]" : "text-[#202020]"
                }`}
              >
                {formatStat(0, stat.decimals, stat.suffix)}
              </span>
              <p className="text-center text-base leading-6 font-medium tracking-[-0.03em] text-[#646464]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StatsSection;
