import { clsx } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import Image from "next/image";

const buttonVariants = cva(
  "font-medium leading-[20px] whitespace-nowrap transition-all active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "px-3 py-1.5 sm:px-[20px] sm:py-[12px]  rounded-[12px] bg-[#006FFF] border border-[#006FFF] text-white",
        secondary:
          "px-3 py-1.5 sm:px-[20px] sm:py-[12px]  rounded-[12px] bg-white text-[#202020] shadow-[0px_24px_24px_-12px_#3333330D,0px_12px_12px_-6px_#3333330D,0px_6px_6px_-3px_#3333330D,0px_3px_3px_-1.5px_#3333330D,0px_1px_1px_-0.5px_#3333330D,0px_0px_0px_1px_#00000014]",
        outline:
          "rounded-[10px] py-[8px] px-[18px] border border-[#006FFF] text-[#006FFF] bg-transparent",
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
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {variant === "primary" && (
          <Image
            src="/assets/common/arrow.svg"
            alt="arrow"
            width={20}
            height={20}
            className="h-5 w-5"
          />
        )}
      </span>
    </button>
  );
}
