import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const CARD_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

function ChevronBadge() {
  return (
    <div
      className={`flex items-center gap-2 overflow-hidden rounded-md bg-white p-1 ${CARD_SHADOW}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="#006FFF"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ChevronDownBadge() {
  return (
    <div
      className={`flex h-[24px] w-[24px] items-center justify-center gap-2 overflow-hidden rounded-[6px] bg-white ${CARD_SHADOW}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#006FFF"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export type IconStepsRowItem = {
  /** Unique key for the item */
  key: string;
  /** Main label under the icon */
  label: string;
  /** Icon content (SVG or image) */
  icon: ReactNode;
  /** Optional line above the label (e.g. "1 Credit") */
  topLabel?: string;
};

type IconStepsRowProps = {
  items: IconStepsRowItem[];
  className?: string;
  /** Use "white" when the section has a white background so hover is visible (gray-100). */
  variant?: "default" | "white";
};

/**
 * Shared row of icon + label steps with hover and chevron dividers.
 * Used on home (problem section), pricing (action credits), how-it-works (CRM sync), onboarding.
 */
export function IconStepsRow({
  items,
  className = "",
  variant = "default",
}: IconStepsRowProps) {
  const isWhite = variant === "white";
  const cellHover = isWhite ? "hover:bg-gray-50" : "hover:bg-black/3";
  const labelClass = isWhite
    ? "text-center text-[14px] leading-[24px] font-light tracking-[-0.01em] md:max-w-[18em]"
    : "text-center text-[14px] leading-5 tracking-[-0.006em]";

  return (
    <div
      className={cn(
        "flex w-full flex-col items-stretch divide-y divide-[#E5E7EB] border-y border-b-0 border-[#E5E7EB] md:flex-row md:divide-y-0 md:border-b",
        className,
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.key}
          className={[
            "relative flex flex-1 flex-col items-center justify-center gap-4 px-12 py-6 transition-colors duration-200 md:gap-6 md:py-8",
            cellHover,
            index < items.length - 1
              ? "pb-9 md:border-r md:border-[#E5E7EB] md:pb-8"
              : "",
            index > 0 ? "pt-9 md:pt-8" : "",
          ].join(" ")}
        >
          <div
            className={`flex items-center gap-2 overflow-hidden rounded-[10px] bg-white px-3 py-2 ${CARD_SHADOW}`}
          >
            {item.icon}
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            {item.topLabel && (
              <span className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020] md:leading-[24px]">
                {item.topLabel}
              </span>
            )}
            <span className={labelClass}>{item.label}</span>
          </div>
          {index < items.length - 1 && (
            <>
              <div className="absolute top-1/2 right-0 z-10 hidden translate-x-1/2 -translate-y-1/2 md:flex">
                <ChevronBadge />
              </div>
              <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 translate-y-1/2 md:hidden">
                <ChevronDownBadge />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
