import Link from "next/link";
import NewsExpandableSearch from "@/components/news/news-expandable-search";
import { buildNewsListingHref } from "@/lib/news-listing-url";

type NewsFilterSectionProps = {
  categories: string[];
  currentCategory: string;
  currentTag?: string;
  searchQuery: string;
};

function NewsFilterSection({
  categories,
  currentCategory,
  currentTag,
  searchQuery,
}: NewsFilterSectionProps) {
  const displayCategories = ["All", ...categories.filter((c) => c !== "All")];
  const q = searchQuery.trim();
  const tag = currentTag && currentTag !== "All" ? currentTag : undefined;

  return (
    <section id="news-filter" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] bg-white">
          <div className="flex min-h-[52px] items-stretch">
            <div className="scrollbar-none flex min-h-[52px] flex-1 items-center gap-2 overflow-x-auto py-0 pl-2">
              {displayCategories.map((category) => {
                const isActive =
                  category === "All"
                    ? !currentCategory || currentCategory === "All"
                    : currentCategory === category;
                const href = buildNewsListingHref({
                  category: category === "All" ? undefined : category,
                  tag,
                  q: q || undefined,
                });
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

            <NewsExpandableSearch
              currentCategory={currentCategory}
              currentTag={currentTag}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsFilterSection;
