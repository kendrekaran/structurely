"use client";

import Link from "next/link";

type NewsFilterSectionProps = {
  categories: string[];
  currentCategory: string;
};

function NewsFilterSection({
  categories,
  currentCategory,
}: NewsFilterSectionProps) {
  const displayCategories = ["All", ...categories.filter((c) => c !== "All")];

  return (
    <section id="news-filter" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] bg-white">
          <div className="flex h-[52px] items-stretch pl-2">
            <div className="scrollbar-none flex flex-1 items-center  gap-2 overflow-x-auto">
              {displayCategories.map((category) => {
                const isActive =
                  category === "All"
                    ? !currentCategory || currentCategory === "All"
                    : currentCategory === category;
                const href =
                  category === "All"
                    ? "/news"
                    : `/news?category=${encodeURIComponent(category)}`;
                return (
                  <Link
                    key={category}
                    href={href}
                    className={`flex shrink-0 cursor-pointer items-center justify-center rounded-lg px-3 py-1.5 text-[14px] leading-[20px] tracking-[-0.01em] whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-[#006FFF] text-[#FAFAFA]"
                        : "hover:text-[#202020]"
                    }`}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>
            <button className="ml-2 flex aspect-square shrink-0 cursor-pointer items-center justify-center border-l border-[#E5E7EB] p-2 transition-colors hover:text-[#202020]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5005 17.5001L13.8838 13.8835"
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
    </section>
  );
}

export default NewsFilterSection;
