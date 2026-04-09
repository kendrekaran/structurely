"use client";

import { useState } from "react";

const tabs = [
  "All",
  "Press Release",
  "Related News",
  "Related News",
  "Stories",
];

function TabsFilter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full border-t border-b border-[#E5E7EB]">
      <div className="md:px-global px-0">
        <div className="max-w-global mx-auto flex items-center justify-between border-x border-[#E5E7EB] bg-white">
          <div className="scrollbar-hide flex min-w-0 flex-1 items-center gap-2 overflow-x-auto px-2 py-[10px]">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex shrink-0 items-center justify-center rounded-lg px-3 py-1.5 text-sm leading-5 tracking-[-0.006em] transition-colors ${
                  activeIndex === i
                    ? "bg-[#006FFF] text-[#FAFAFA]"
                    : "text-[#646464] hover:text-[#111]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center md:hidden">
            <button className="flex items-center justify-center border-l border-[#E5E7EB] p-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33301 3.3335H14.6663"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 8H12"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12.6665H10"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="flex items-center justify-center border-l border-[#E5E7EB] p-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4995 17.5L13.8828 13.8833"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabsFilter;
