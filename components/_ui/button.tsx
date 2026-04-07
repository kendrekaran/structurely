"use client";

import { clsx } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import type { ButtonHTMLAttributes } from "react";
import { useRef } from "react";

const buttonVariants = cva(
  "group font-medium leading-[20px] w-full flex items-center justify-center md:justify-start sm:w-auto whitespace-nowrap transition-all active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "px-3 sm:px-[20px] py-[12px] hover:bg-[#006FFF]/90 rounded-[12px] bg-[#006FFF] border border-[#006FFF] text-white",
        secondary:
          "px-3 py-1.5 sm:px-[20px] py-[12px] hover:bg-black/2  rounded-[12px] bg-white text-[#202020] shadow-[0px_24px_24px_-12px_#3333330D,0px_12px_12px_-6px_#3333330D,0px_6px_6px_-3px_#3333330D,0px_3px_3px_-1.5px_#3333330D,0px_1px_1px_-0.5px_#3333330D,0px_0px_0px_1px_#00000014]",
        outline:
          "rounded-[10px] py-[8px] px-[18px] hover:bg-[#006FFF]/3 border border-[#006FFF] text-[#006FFF] bg-transparent",
      },
      size: {
        sm: "px-2 py-1 sm:px-4 sm:py-2 text-[13px] sm:text-[14px]",
        md: "text-[14px] sm:text-[14px] ",
        lg: "px-4 py-2 sm:px-5 sm:py-2.5 text-[15px] sm:text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  variant,
  size,
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const leftIconRef = useRef<HTMLSpanElement>(null);
  const rightIconRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const btn = buttonRef.current;
      const leftIcon = leftIconRef.current;
      const rightIcon = rightIconRef.current;
      if (!btn || !leftIcon || !rightIcon || variant !== "primary") return;

      // btn.style.minWidth = `${btn.offsetWidth + 1}px`;

      tlRef.current = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "power4.inOut",
        },
      });

      tlRef.current
        .to(
          rightIcon,
          {
            width: 0,
            marginRight: 0,
            opacity: 0,
            filter: "blur(6px)",
            scale: 0,
            x: "2.5em",
          },
          0,
        )
        .fromTo(
          leftIcon,
          {
            width: 0,
            filter: "blur(6px)",
            opacity: 0,
            scale: 0,
            x: "-2.5em",
          },
          {
            width: 20,
            x: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          },
          0,
        );
    },
    { scope: buttonRef, dependencies: [variant] },
  );

  return (
    <button
      ref={buttonRef}
      className={clsx(buttonVariants({ variant, size }), className)}
      onMouseEnter={(e) => {
        onMouseEnter?.(e);
        if (variant === "primary") tlRef.current?.play();
      }}
      onMouseLeave={(e) => {
        onMouseLeave?.(e);
        if (variant === "primary") tlRef.current?.reverse();
      }}
      {...props}
    >
      <span className="flex w-full items-center justify-between gap-2">
        {children}
        {variant === "primary" && (
          <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
            <span
              ref={leftIconRef}
              className="pointer-events-none inline-flex h-5 w-5 items-center justify-center overflow-hidden"
            >
              <Image
                src="/assets/common/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </span>
            <span
              ref={rightIconRef}
              className="pointer-events-none absolute right-0 inline-flex h-5 w-5 items-center justify-center overflow-hidden"
            >
              <Image
                src="/assets/common/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </span>
          </span>
        )}
      </span>
    </button>
  );
}
