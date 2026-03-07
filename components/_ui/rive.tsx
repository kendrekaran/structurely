"use client";

import { cn } from "@/lib/utils";
import { Fit, Layout, useRive } from "@rive-app/react-canvas";
import * as React from "react";

interface RiveProps {
  src: string;
  stateMachineName?: string;
  className?: string;
  fallback?: React.ReactNode;
  rootMargin?: string;
  onLoad?: () => void;
  layout?: Layout;
}

function Rive({
  src,
  stateMachineName = "State Machine 1",
  className,
  fallback,
  rootMargin = "50px",
  layout = new Layout({
    fit: Fit.Contain,
    layoutScaleFactor: 1,
  }),
  onLoad,
}: RiveProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines: stateMachineName,
    autoplay: false,
    isTouchScrollEnabled: true,
    layout,
  });

  React.useEffect(() => {
    if (rive) {
      setIsLoaded(true);
      onLoad?.();
    }
  }, [rive, onLoad]);

  React.useEffect(() => {
    const riveInstance = rive;
    if (!riveInstance) return;

    const handleResize = () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      riveInstance.cleanup();
    };
  }, [rive]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container || !rive) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            rive.play();
            console.log("play");
          } else {
            rive.pause();
            console.log("pause");
          }
        });
      },
      { threshold: 0, rootMargin },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [rive, rootMargin]);

  if (fallback && !isLoaded) {
    return (
      <div
        ref={containerRef}
        className={cn("flex items-center justify-center", className)}
      >
        {fallback}
      </div>
    );
  }

  if (!RiveComponent) {
    return fallback ? (
      <div className={cn(className)}>{fallback}</div>
    ) : (
      <div ref={containerRef} className={cn(className)} />
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {fallback && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            isLoaded && "pointer-events-none opacity-0",
          )}
        >
          {fallback}
        </div>
      )}
      <div className="absolute inset-0 h-full w-full mask-[linear-gradient(#000_1px,#000_calc(100%-1px))] [-webkit-mask-image:linear-gradient(#000_1px,#000_calc(100%-1px))]">
        <RiveComponent />
      </div>
    </div>
  );
}

export default Rive;
