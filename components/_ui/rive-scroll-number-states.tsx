"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Fit, Layout, useRive } from "@rive-app/react-canvas";
import { cn } from "@/lib/utils";

const DEFAULT_RIVE_SRC = "/rive/home/new/2.riv";
const DEFAULT_STATE_MACHINE = "State Machine 1";
const DEFAULT_INPUT_NAME = "Number 1";
const DEFAULT_AUTOPLAY_MS = 5000;

export type RiveNumberStateItem = {
  title: string;
  description: string;
  /** Shown as pills on small screens (same pattern as industry selector). */
  features?: string[];
};

const DEFAULT_ITEMS: RiveNumberStateItem[] = [
  {
    title: "Human-like AI calls with leads",
    description:
      "Human-like AI voice agents handle inbound and outbound lead qualification calls, engage prospects naturally, and capture sales-ready opportunities.",
    features: ["Ring", "AI dialog", "Score", "CRM log"],
  },
  {
    title: "Texting + drip campaigns",
    description:
      "AI text messaging and drip campaigns automate follow-up, support two-way SMS conversations, and keep leads engaged throughout the sales funnel.",
    features: ["Trigger", "Drip", "Reply", "Re-engage"],
  },
  {
    title: "Live transfers",
    description:
      "Real-time live transfers route qualified leads directly to your sales team, improving response speed, connection rates, and conversion opportunities.",
    features: ["Qualify", "Warm intro", "Bridge", "Agent"],
  },
  {
    title: "Appointment setting",
    description:
      "AI appointment setting automates scheduling for qualified leads, integrates with calendars and CRMs, and helps sales teams book more meetings.",
    features: ["Intent", "Slots", "Book", "Remind"],
  },
];

export type RiveScrollNumberStatesProps = {
  items?: RiveNumberStateItem[];
  src?: string;
  stateMachineName?: string;
  inputName?: string;
  /** Milliseconds between autoplay steps (default 5000). */
  autoplayIntervalMs?: number;
  layout?: Layout;
  className?: string;
  /** If true, Rive input uses 1…n (legacy); if false, uses 0…n−1 (states 0–3 for four items). */
  inputOneBased?: boolean;
};

function RiveScrollNumberStatesInner({
  items: itemsProp,
  src = DEFAULT_RIVE_SRC,
  stateMachineName = DEFAULT_STATE_MACHINE,
  inputName = DEFAULT_INPUT_NAME,
  autoplayIntervalMs = DEFAULT_AUTOPLAY_MS,
  layout: layoutProp,
  className,
  inputOneBased = false,
}: RiveScrollNumberStatesProps) {
  const items = itemsProp ?? DEFAULT_ITEMS;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleResetKey, setCycleResetKey] = useState(0);
  const active = items[activeIndex];

  const tabTransition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const };

  const layout = useMemo(
    () => layoutProp ?? new Layout({ fit: Fit.Contain, layoutScaleFactor: 1 }),
    [layoutProp],
  );

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines: stateMachineName,
    autoplay: true,
    layout,
  });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoplayIntervalMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeIndex, cycleResetKey, items.length, autoplayIntervalMs]);

  useEffect(() => {
    if (!rive) return;

    const inputs = rive.stateMachineInputs(stateMachineName);
    const numberInput = Array.isArray(inputs)
      ? inputs.find((input) => input.name === inputName)
      : null;

    if (
      numberInput &&
      "value" in numberInput &&
      typeof numberInput.value === "number"
    ) {
      const next = inputOneBased ? activeIndex + 1 : activeIndex;
      numberInput.value = next;
    }
  }, [
    rive,
    activeIndex,
    cycleResetKey,
    stateMachineName,
    inputName,
    inputOneBased,
  ]);

  const mobileFeatures = active?.features ?? [];

  return (
    <div
      className={cn(
        "flex h-full min-h-0 w-full flex-col md:flex-row",
        className,
      )}
    >
      <div className="flex flex-col border-b border-[#E5E7EB] md:w-[50%] md:shrink-0 md:border-b-0">
        {items.map((item, i) => (
          <motion.button
            key={`${item.title}-${i}`}
            type="button"
            onClick={() => {
              setCycleResetKey((prev) => prev + 1);
              if (i !== activeIndex) setActiveIndex(i);
            }}
            initial={false}
            animate={{
              backgroundColor: activeIndex === i ? "#FFFFFF" : "#FAFAFA",
            }}
            transition={tabTransition}
            className={cn(
              "relative flex w-full cursor-pointer flex-col items-start px-6 py-5 text-left md:px-8 md:py-6",
              activeIndex !== i && i !== items.length - 1
                ? "border-b border-[#E5E7EB]"
                : "",
            )}
          >
            <span className="text-base leading-6 font-medium tracking-[-0.02em] text-[#202020]">
              {item.title}
            </span>
            <motion.div
              className="overflow-hidden"
              initial={false}
              animate={{
                height: activeIndex === i ? "auto" : 0,
                opacity: activeIndex === i ? 1 : 0,
                filter: activeIndex === i ? "blur(0px)" : "blur(4px)",
                y: activeIndex === i ? 0 : 10,
              }}
              transition={tabTransition}
            >
              <div className="pt-2">
                <span className="text-base leading-[26px] font-medium tracking-[-0.01em] text-[#646464]">
                  {item.description}
                </span>
              </div>
            </motion.div>
            {activeIndex === i && (
              <>
                <div className="absolute right-0 bottom-0 left-0 h-[3px] bg-[#E5E7EB]" />
                <motion.div
                  key={`${activeIndex}-${cycleResetKey}`}
                  className="absolute bottom-0 left-0 h-[3px] bg-[#006FFF]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: autoplayIntervalMs / 1000,
                    ease: "linear",
                  }}
                />
              </>
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-1">
        <div className="flex h-full min-h-0 flex-1 flex-col border-t border-[#E5E7EB] md:border-t-0 md:border-l">
          <div className="relative flex aspect-[699/560] w-full flex-1 items-center justify-center overflow-hidden bg-white">
            {RiveComponent ? (
              <div className="absolute h-full w-full scale-105">
                <RiveComponent />
              </div>
            ) : (
              <div className="text-sm text-[#646464]">Loading animation…</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const RiveScrollNumberStates = RiveScrollNumberStatesInner;
