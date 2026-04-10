"use client";

import { Layout, useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export type RiveScrollStatesCanvasHandle = {
  /** Drive the state-machine number input when it exists; no-op if Rive is not ready. */
  applyStep: (step: number) => void;
};

export type RiveScrollStatesCanvasProps = {
  src: string;
  stateMachineName: string;
  inputName: string;
  layout: Layout;
  canvasClassName?: string;
};

export const RiveScrollStatesCanvas = forwardRef<
  RiveScrollStatesCanvasHandle,
  RiveScrollStatesCanvasProps
>(function RiveScrollStatesCanvas(
  { src, stateMachineName, inputName, layout, canvasClassName },
  ref,
) {
  const numberInputRef = useRef<ReturnType<typeof useStateMachineInput>>(null);
  const riveRef = useRef<{ play: () => void } | undefined>(undefined);

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

  numberInputRef.current = numberInput ?? null;
  riveRef.current = rive ?? undefined;

  useImperativeHandle(
    ref,
    () => ({
      applyStep(step: number) {
        const inp = numberInputRef.current;
        if (!inp) return;
        inp.value = step;
        riveRef.current?.play();
      },
    }),
    [],
  );

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        canvasClassName,
      )}
    >
      {RiveComponent ? <RiveComponent /> : null}
    </div>
  );
});
