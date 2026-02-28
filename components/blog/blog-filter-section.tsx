"use client";

import { useState } from "react";

const categories = [
  "All",
  "Case Study",
  "Competitors",
  "CRM",
  "Customer",
  "General",
  "Leasing",
  "Marketing",
  "Mortgage",
  "Podcast",
  "Real Estate",
];

function BlogFilterSection() {
  const [activeCategory, setActiveCategory] = useState("Case Study");

  return (
    <section id="blog-filter" className="relative z-0 bg-white border-y border-[#E5E7EB]">
      <div className="px-global">
        <div className="max-w-global mx-auto">
          <div className="flex items-center h-[52px]">
            <div className="flex items-center gap-2 flex-1 overflow-x-auto scrollbar-none">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex shrink-0 items-center justify-center px-3 py-1.5 text-[14px] leading-[20px] tracking-[-0.01em] rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-[#006FFF] text-[#FAFAFA]"
                      : "text-[#646464] hover:text-[#202020]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="shrink-0 ml-2 flex items-center justify-center p-2 text-[#646464] hover:text-[#202020] cursor-pointer transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5005 17.5001L13.8838 13.8835" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogFilterSection;
