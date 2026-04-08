"use client";

import { useState } from "react";

const tabs = ["All", "Press Release", "Related News", "Related News", "Stories"];

function TabsFilter() {
  const [active, setActive] = useState("Press Release1");

  return (
    <div className="w-full border-t border-b border-[#E5E7EB]">
      <div className="px-0 md:px-global">
        <div className="max-w-global border-x bg-white border-[#E5E7EB] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-[10px] px-2 flex-1 min-w-0">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(tab + i)}
                className={`flex shrink-0 items-center justify-center px-3 py-1.5 text-sm leading-5 tracking-[-0.006em] rounded-lg transition-colors ${
                  active === tab + i
                    ? "bg-[#006FFF] text-[#FAFAFA]"
                    : "text-[#646464] hover:text-[#111]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center shrink-0 md:hidden">
            <button className="flex items-center justify-center p-4 border-l border-[#E5E7EB]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33301 3.3335H14.6663" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 8H12" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12.6665H10" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="flex items-center justify-center p-4 border-l border-[#E5E7EB]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4995 17.5L13.8828 13.8833" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabsFilter;
