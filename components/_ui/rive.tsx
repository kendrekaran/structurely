"use client";

import { cn } from "@/lib/utils";
import { Fit, Layout, useRive } from "@rive-app/react-canvas";
import Image from "next/image";
import * as React from "react";

interface RiveProps {
  src: string;
  stateMachineName?: string;
  className?: string;
  fallback?: React.ReactNode;
  poster?: string;
  rootMargin?: string;
  onLoad?: () => void;
  layout?: Layout;
  isAnimated?: boolean;
}

const riveLayout = new Layout({
  fit: Fit.Contain,
  layoutScaleFactor: 1,
});

function Rive({
  src,
  stateMachineName = "State Machine 1",
  className,
  fallback,
  poster,
  rootMargin = "50px",
  layout = riveLayout,
  onLoad,
  isAnimated = true,
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
          } else {
            rive.pause();
          }
        });
      },
      { threshold: 0, rootMargin },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [rive, rootMargin]);

  if (!RiveComponent) {
    return (
      <div
        ref={containerRef}
        className={cn("relative overflow-hidden", className)}
      >
        {(poster || fallback) && (
          <div className="absolute inset-0 flex items-center justify-center">
            {poster ? (
              <Image
                src={poster}
                alt=""
                fill
                sizes="100vw"
                unoptimized
                className="object-cover"
              />
            ) : (
              fallback
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {(poster || fallback) && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            isLoaded && "pointer-events-none opacity-0",
          )}
        >
          {poster ? (
            <Image
              src={poster}
              alt=""
              fill
              sizes="100vw"
              unoptimized
              className="object-cover"
            />
          ) : (
            fallback
          )}
        </div>
      )}
      <div
        data-rive-id={src}
        className={cn(
          "absolute inset-0 h-full w-full mask-[linear-gradient(#000_1px,#000_calc(100%-1px))] [-webkit-mask-image:linear-gradient(#000_1px,#000_calc(100%-1px))]",
          isAnimated && "will-change-opacity transition-all duration-800",
          isAnimated ? (isLoaded ? "opacity-100" : "opacity-0") : "opacity-100",
        )}
      >
        <RiveComponent />
      </div>
    </div>
  );
}

export default Rive;
