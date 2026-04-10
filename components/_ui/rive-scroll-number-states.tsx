"use client";

import { useGSAP } from "@gsap/react";
import {
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { memo, useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_RIVE_SRC = "/rive/home/new/2.riv";
const DEFAULT_STATE_MACHINE = "State Machine 1";
const DEFAULT_INPUT_NAME = "Number 1";

/** Inclusive range [0, maxState] — default four states: 0, 1, 2, 3. */
const DEFAULT_MAX_STATE = 3;

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
}: RiveScrollNumberStatesProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
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

  useGSAP(
    () => {
      const trigger = wrapperRef.current;
      if (!trigger || !numberInput) return;

      valueProxy.current.value = 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: scrollTriggerStart,
          end: scrollTriggerEnd,
          // pin: true,
          // markers: true,
          scrub,
          fastScrollEnd: true,
        },
      });

      tl.to(
        valueProxy.current,
        {
          value: maxState,
          ease: "none",
          duration: 1,
          onUpdate: () => {
            const raw = valueProxy.current.value;
            const stepped = Math.round(Math.min(maxState, Math.max(0, raw)));
            numberInput.value = stepped;
            rive?.play();
          },
        },
        0,
      );
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
    </div>
  );
}

export const RiveScrollNumberStates = memo(RiveScrollNumberStatesInner);
