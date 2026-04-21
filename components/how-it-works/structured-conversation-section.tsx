"use client";

import Rive from "@/components/_ui/rive";
import { Fit, Layout } from "@rive-app/react-canvas";

const featureItems = [
  "Structured conversation trees",
  // "AI 3 is not a keyword bot.",
  "Dynamic branching logic",
  "Intent detection",
  "Objection response frameworks",
  "Context memory across touchpoints",
];

const CheckBadgeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M3.20849 7.18346C3.08686 6.63556 3.10554 6.06582 3.26279 5.52707C3.42004 4.98832 3.71078 4.49799 4.10805 4.10156C4.50532 3.70512 4.99625 3.41541 5.53533 3.25928C6.07441 3.10316 6.64419 3.08568 7.19183 3.20846C7.49325 2.73704 7.9085 2.34909 8.39929 2.08036C8.89008 1.81163 9.44062 1.67078 10.0002 1.67078C10.5597 1.67078 11.1102 1.81163 11.601 2.08036C12.0918 2.34909 12.5071 2.73704 12.8085 3.20846C13.357 3.08514 13.9277 3.10255 14.4677 3.25905C15.0076 3.41555 15.4992 3.70607 15.8967 4.10358C16.2942 4.50109 16.5847 4.99268 16.7412 5.53262C16.8977 6.07256 16.9151 6.64332 16.7918 7.19179C17.2632 7.49321 17.6512 7.90846 17.9199 8.39925C18.1886 8.89004 18.3295 9.44058 18.3295 10.0001C18.3295 10.5597 18.1886 11.1102 17.9199 11.601C17.6512 12.0918 17.2632 12.507 16.7918 12.8085C16.9146 13.3561 16.8971 13.9259 16.741 14.465C16.5849 15.004 16.2952 15.495 15.8987 15.8922C15.5023 16.2895 15.012 16.5802 14.4732 16.7375C13.9345 16.8947 13.3647 16.9134 12.8168 16.7918C12.5158 17.265 12.1002 17.6546 11.6086 17.9246C11.117 18.1945 10.5652 18.336 10.0043 18.336C9.44347 18.336 8.89168 18.1945 8.40006 17.9246C7.90843 17.6546 7.49286 17.265 7.19183 16.7918C6.64419 16.9146 6.07441 16.8971 5.53533 16.741C4.99625 16.5848 4.50532 16.2951 4.10805 15.8987C3.71078 15.5023 3.42004 15.0119 3.26279 14.4732C3.10554 13.9344 3.08686 13.3647 3.20849 12.8168C2.73346 12.5162 2.34217 12.1003 2.07103 11.6078C1.7999 11.1153 1.65771 10.5623 1.65771 10.0001C1.65771 9.43795 1.7999 8.88491 2.07103 8.39244C2.34217 7.89998 2.73346 7.48409 3.20849 7.18346Z"
      stroke="#006FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 10L9.16667 11.6667L12.5 8.33337"
      stroke="#006FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function StructuredConversationSection() {
  return (
    <div className="px-global">
      <section
        id="structured-conversation"
        className="max-w-global relative z-0 mx-auto border-x"
      >
        <div className="max-w-global mx-auto flex flex-col md:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-6 border-b border-[#E5E7EB] px-3 py-6 md:w-1/2 md:flex-none md:border-r md:border-b-0 md:px-[48px] md:py-[48px]">
            <div className="flex flex-col items-center gap-3 border-[#E5E7EB] md:items-start md:border-b md:border-b-0 md:pb-0">
              <h2
                data-reveal="words"
                className="text-center md:max-w-[10em] md:text-left"
              >
                Structured <span className="text-[#006FFF]">conversation</span>{" "}
                engine
              </h2>
              <div className="flex flex-wrap items-start gap-4 md:items-center md:gap-3">
                <p className="text-[12px] leading-[16px] md:text-[16px] md:leading-[26px] md:tracking-[-0.01em]">
                  This is the differentiator.
                </p>
              </div>
            </div>

            <ul className="flex max-w-[348px] flex-col divide-y divide-[#E5E7EB]">
              {featureItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 py-3 first:pt-0 last:pb-0"
                >
                  <CheckBadgeIcon />
                  <span className="text-sm leading-relaxed tracking-[-0.01em]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[14px] leading-[20px] text-[#202020] md:text-[16px] md:leading-[26px] md:tracking-[-0.01em]">
              Every interaction builds context.
            </p>
          </div>

          <div className="flex min-h-[360px] flex-1 items-stretch p-3 md:min-h-[480px] md:w-1/2 md:flex-none">
            <div className="flex flex-1 items-center justify-center overflow-hidden rounded-sm bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[540/518] w-full overflow-hidden">
                <Rive
                  src="/rive/home/6.riv"
                  className="h-full w-full scale-110 overflow-hidden"
                  layout={new Layout({ fit: Fit.Cover, layoutScaleFactor: 1 })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StructuredConversationSection;
