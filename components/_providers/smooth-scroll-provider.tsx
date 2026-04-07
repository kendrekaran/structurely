"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";

import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const lenisOptions = {
  lerp: 0.1,
};

function GsapLenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    // ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      ScrollTrigger.killAll(false);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsTouchDevice(isTouch);
  }, []);

  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ ...lenisOptions, autoRaf: false }}>
      <GsapLenisSync />
      {children}
    </ReactLenis>
  );
}
