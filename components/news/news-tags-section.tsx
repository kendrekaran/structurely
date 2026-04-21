import Link from "next/link";
import { buildNewsListingHref } from "@/lib/news-listing-url";

type NewsTagsSectionProps = {
  tags: string[];
  currentTag: string;
  currentCategory: string;
  searchQuery: string;
};

function NewsTagsSection({
  tags,
  currentTag,
  currentCategory,
  searchQuery,
}: NewsTagsSectionProps) {
  if (tags.length === 0) return null;

  const displayTags = ["All", ...tags.filter((t) => t !== "All")];
  const q = searchQuery.trim();
  const cat =
    currentCategory && currentCategory !== "All" ? currentCategory : undefined;

  return (
    <section id="news-tags" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] bg-white">
          <div className="scrollbar-none flex min-h-[44px] items-center gap-1.5 overflow-x-auto px-3 py-2">
            <span className="mr-1 shrink-0 text-[12px] leading-[16px] font-medium tracking-[0.04em] text-[#9CA3AF] uppercase">
              Tags
            </span>
            {displayTags.map((tag) => {
              const isActive =
                tag === "All"
                  ? !currentTag || currentTag === "All"
                  : currentTag === tag;
              const href = buildNewsListingHref({
                category: cat,
                tag: tag === "All" ? undefined : tag,
                q: q || undefined,
              });
              return (
                <Link
                  key={tag}
                  href={href}
                  className={`flex shrink-0 cursor-pointer items-center justify-center rounded-full border px-3 py-1 text-[12px] leading-[16px] tracking-[-0.01em] whitespace-nowrap transition-colors ${
                    isActive
                      ? "border-[#006FFF] bg-[#EEF5FF] text-[#006FFF]"
                      : "border-[#E5E7EB] text-[#646464] hover:border-[#006FFF] hover:text-[#006FFF]"
                  }`}
                >
                  {tag === "All" ? "All Tags" : `#${tag}`}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsTagsSection;
