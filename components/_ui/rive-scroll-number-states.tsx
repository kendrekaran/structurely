"use client";

import { useGSAP } from "@gsap/react";
import {
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { memo, useCallback, useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const DEFAULT_RIVE_SRC = "/rive/home/new/2.riv";
const DEFAULT_STATE_MACHINE = "State Machine 1";
const DEFAULT_INPUT_NAME = "Number 1";

/** Inclusive range [0, maxState] — default four states: 0, 1, 2, 3. */
const DEFAULT_MAX_STATE = 3;

function riveScrollStateLabel(index: number) {
  return `state-${index}`;
}

export type RiveScrollNumberStatesProps = {
  src?: string;
  stateMachineName?: string;
  inputName?: string;
  /** Highest numeric value sent to the input (states are 0 … maxState). */
  maxState?: number;
  className?: string;
  canvasClassName?: string;
  /** ScrollTrigger scrub smoothing (seconds). */
  scrub?: number;
  scrollTriggerStart?: string;
  scrollTriggerEnd?: string;
  layout?: Layout;
  /** Duration (s) when jumping scroll via segment clicks (ScrollTrigger + labelToScroll). */
  scrollToDuration?: number;
  /** Optional class for the bottom segment strip (omit to hide the strip). */
  segmentStripClassName?: string | null;
};

function RiveScrollNumberStatesInner({
  src = DEFAULT_RIVE_SRC,
  stateMachineName = DEFAULT_STATE_MACHINE,
  inputName = DEFAULT_INPUT_NAME,
  maxState = DEFAULT_MAX_STATE,
  className,
  canvasClassName,
  scrub = 1,
  scrollTriggerStart = "25% center",
  scrollTriggerEnd = "75% center",
  layout: layoutProp,
  scrollToDuration = 0.55,
  segmentStripClassName,
}: RiveScrollNumberStatesProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const layout = useMemo(
    () => layoutProp ?? new Layout({ fit: Fit.Cover, layoutScaleFactor: 1 }),
    [layoutProp],
  );

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines: stateMachineName,
    autoplay: false,
    layout,
  });

  const numberInput = useStateMachineInput(
    rive,
    stateMachineName,
    inputName,
    0,
  );

  const valueProxy = useRef({ value: 0 });

  const segmentCount = maxState + 1;

  useGSAP(
    () => {
      const trigger = wrapperRef.current;
      if (!trigger || !numberInput) return;

      valueProxy.current.value = 0;
      timelineRef.current = null;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: scrollTriggerStart,
          end: scrollTriggerEnd,
          scrub,
          fastScrollEnd: true,
        },
      });

      const parts = maxState + 1;
      const partDuration = 1 / parts;

      const syncRiveValue = () => {
        const raw = valueProxy.current.value;
        const stepped = Math.round(Math.min(maxState, Math.max(0, raw)));
        numberInput.value = stepped;
        rive?.play();
      };

      for (let i = 0; i < parts; i++) {
        const endVal = ((i + 1) / parts) * maxState;
        tl.to(
          valueProxy.current,
          {
            value: endVal,
            ease: "none",
            duration: partDuration,
            onUpdate: syncRiveValue,
          },
          i * partDuration,
        );
      }

      for (let i = 0; i <= maxState; i++) {
        const t = maxState === 0 ? 0 : i / maxState;
        tl.addLabel(riveScrollStateLabel(i), t);
      }

      timelineRef.current = tl;

      return () => {
        timelineRef.current = null;
      };
    },
    {
      dependencies: [
        numberInput,
        rive,
        maxState,
        scrub,
        scrollTriggerStart,
        scrollTriggerEnd,
      ],
      scope: wrapperRef,
    },
  );

  const scrollToSegment = useCallback(
    (index: number) => {
      const tl = timelineRef.current;
      const st = tl?.scrollTrigger;
      if (!tl || !st) return;
      console.log("scrollToSegment", index);

      const label = riveScrollStateLabel(index);
      if (tl.labels[label] === undefined) return;

      console.log("label", label);

      const y = st.labelToScroll(label);
      gsap.to(window, {
        duration: scrollToDuration,
        ease: "power2.inOut",
        scrollTo: { y, autoKill: true },
      });
    },
    [scrollToDuration],
  );

  const showSegments = segmentStripClassName !== null;

  return (
    <div ref={wrapperRef} className={cn("relative h-full w-full", className)}>
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          canvasClassName,
        )}
      >
        {RiveComponent ? <RiveComponent /> : null}
      </div>

      {showSegments ? (
        <div
          className={cn(
            "pointer-events-auto absolute inset-x-0 bottom-0 z-10 flex h-10 border-t border-black/10 bg-white/40 backdrop-blur-sm dark:bg-black/30",
            segmentStripClassName,
          )}
          role="group"
          aria-label="Scroll to animation state"
        >
          {Array.from({ length: segmentCount }, (_, i) => (
            <button
              key={i}
              type="button"
              className={cn(
                "text-foreground/80 flex flex-1 items-center justify-center border-r border-black/10 text-xs font-medium transition-colors last:border-r-0",
                "focus-visible:ring-primary hover:bg-black/5 focus-visible:ring-2 focus-visible:outline-none dark:hover:bg-white/10",
              )}
              aria-label={`Scroll to state ${i + 1} of ${segmentCount}`}
              onClick={() => scrollToSegment(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export const RiveScrollNumberStates = memo(RiveScrollNumberStatesInner);
