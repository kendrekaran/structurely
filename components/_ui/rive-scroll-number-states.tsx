"use client";

import { useGSAP } from "@gsap/react";
import { Fit, Layout } from "@rive-app/react-canvas";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import {
  RiveScrollStatesCanvas,
  type RiveScrollStatesCanvasHandle,
} from "@/components/_ui/rive-scroll-number-states-canvas";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const DEFAULT_RIVE_SRC = "/rive/home/new/2.riv";
const DEFAULT_STATE_MACHINE = "State Machine 1";
const DEFAULT_INPUT_NAME = "Number 1";

/** Inclusive range [0, maxState] — default four states: 0, 1, 2, 3. */
const DEFAULT_MAX_STATE = 3;

function riveScrollStateLabel(index: number) {
  return `state-${index}`;
}

/** Scroll Y for a timeline label (same geometry as `labelToScroll`; manual calc avoids bad `|| 0` fallbacks). */
function resolveLabelScrollY(
  tl: gsap.core.Timeline,
  st: ScrollTrigger,
  label: string,
): number | null {
  const labelTime = tl.labels[label];
  if (labelTime === undefined) return null;
  const dur = tl.duration();
  if (!(dur > 0)) return null;
  const range = st.end - st.start;
  if (!Number.isFinite(range)) return null;
  const y = st.start + (labelTime / dur) * range;
  if (Number.isFinite(y)) return y;
  const fallback = st.labelToScroll(label);
  return typeof fallback === "number" && Number.isFinite(fallback)
    ? fallback
    : null;
}

/** Element ScrollToPlugin should animate — matches ScrollTrigger’s scroller (window → scrollingElement). */
function scrollTweenTarget(st: ScrollTrigger): Element | Window {
  const raw = (st as { scroller?: Window | Element }).scroller ?? window;
  if (raw === window && typeof document !== "undefined") {
    return document.scrollingElement ?? document.documentElement;
  }
  return raw;
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
  /** Duration (s) when jumping scroll via segment clicks. */
  scrollToDuration?: number;
  /** Optional class for the bottom segment strip (pass `null` to hide). */
  segmentStripClassName?: string | null;
  /** Fires when the scrubbed segment index changes (synced with Rive input). */
  onActiveSegmentChange?: (index: number) => void;
};

function RiveScrollNumberStatesInner({
  src = DEFAULT_RIVE_SRC,
  stateMachineName = DEFAULT_STATE_MACHINE,
  inputName = DEFAULT_INPUT_NAME,
  maxState = DEFAULT_MAX_STATE,
  className,
  canvasClassName,
  scrub = 1,
  scrollTriggerStart = "center center",
  scrollTriggerEnd = "200% center",
  layout: layoutProp,
  segmentStripClassName,
  onActiveSegmentChange,
}: RiveScrollNumberStatesProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const riveCanvasRef = useRef<RiveScrollStatesCanvasHandle | null>(null);
  const lastSteppedRef = useRef<number | null>(null);
  const onSegmentChangeRef = useRef(onActiveSegmentChange);
  onSegmentChangeRef.current = onActiveSegmentChange;

  const [activeSegment, setActiveSegment] = useState(0);

  const layout = useMemo(
    () => layoutProp ?? new Layout({ fit: Fit.Cover, layoutScaleFactor: 1 }),
    [layoutProp],
  );

  const valueProxy = useRef({ value: 0 });
  const segmentCount = maxState + 1;

  const pushSegment = useCallback((stepped: number) => {
    if (lastSteppedRef.current === stepped) return;
    lastSteppedRef.current = stepped;
    setActiveSegment(stepped);
    onSegmentChangeRef.current?.(stepped);
  }, []);

  useGSAP(
    () => {
      const trigger = wrapperRef.current;
      if (!trigger) return;

      valueProxy.current.value = 0;
      lastSteppedRef.current = null;
      timelineRef.current = null;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: scrollTriggerStart,
          end: scrollTriggerEnd,
          scrub,
          // markers: true,
          pin: document.querySelector(".section-pinned"),
          fastScrollEnd: true,
        },
      });

      const parts = maxState + 1;
      const partDuration = 1 / parts;

      const syncFromScroll = () => {
        const raw = valueProxy.current.value;
        const stepped = Math.round(Math.min(maxState, Math.max(0, raw)));
        riveCanvasRef.current?.applyStep(stepped);
        pushSegment(stepped);
      };

      for (let i = 0; i < parts; i++) {
        const endVal = ((i + 1) / parts) * maxState;
        tl.to(
          valueProxy.current,
          {
            value: endVal,
            ease: "none",
            duration: partDuration,
            onUpdate: syncFromScroll,
          },
          i * partDuration,
        );
      }

      for (let i = 0; i <= maxState; i++) {
        const t = maxState === 0 ? 0 : i / maxState;
        tl.addLabel(riveScrollStateLabel(i), t);
      }

      timelineRef.current = tl;

      const rafId = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        syncFromScroll();
      });

      return () => {
        cancelAnimationFrame(rafId);
        timelineRef.current = null;
      };
    },
    {
      dependencies: [
        maxState,
        scrub,
        scrollTriggerStart,
        scrollTriggerEnd,
        pushSegment,
      ],
      scope: wrapperRef,
    },
  );

  const scrollToSegment = useCallback((index: number) => {
    const tl = timelineRef.current;
    if (!tl?.scrollTrigger) return;

    const label = riveScrollStateLabel(index);
    if (tl.labels[label] === undefined) return;

    // pushSegment(index);
    // riveCanvasRef.current?.applyStep(index);

    const run = () => {
      ScrollTrigger.refresh();
      const st = tl.scrollTrigger;
      if (!st) return;

      const y = resolveLabelScrollY(tl, st, label);
      if (y === null || !Number.isFinite(y)) return;

      const target = scrollTweenTarget(st);
      const yClamped = Math.max(0, Math.round(y));

      gsap.killTweensOf(target);
      gsap.to(target, {
        duration: 0.01,
        ease: "none",
        overwrite: "auto",
        scrollTo: { y: yClamped, autoKill: false },
        onUpdate: () => {
          ScrollTrigger.update();
        },
        onComplete: () => {
          ScrollTrigger.update();
        },
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });
  }, []);

  const showSegments = segmentStripClassName !== null;

  return (
    <div ref={wrapperRef} className={cn("relative h-full w-full", className)}>
      <RiveScrollStatesCanvas
        ref={riveCanvasRef}
        src={src}
        stateMachineName={stateMachineName}
        inputName={inputName}
        layout={layout}
        canvasClassName={canvasClassName}
      />

      {showSegments ? (
        <div
          className={cn(
            "pointer-events-auto absolute inset-x-0 bottom-0 z-10 flex h-full border-t px-[5%]",
            segmentStripClassName,
          )}
          role="tablist"
          aria-label="Rive animation states"
        >
          {Array.from({ length: segmentCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={activeSegment === i}
              className={cn("flex flex-1 items-center justify-center")}
              aria-label={`State ${i + 1} of ${segmentCount}`}
              onClick={() => scrollToSegment(i)}
            >
              {/* {i + 1} */}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export const RiveScrollNumberStates = memo(RiveScrollNumberStatesInner);
