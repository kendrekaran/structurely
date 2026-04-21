import Link from "next/link";
import Badge from "@/components/_ui/badge";
import { buildNewsListingHref } from "@/lib/news-listing-url";

type NewsDetailsHeroSectionProps = {
  title: string;
  description: string;
  image?: string;
  /** e.g. Press Release, Related News, Stories */
  category?: string | null;
  /** ISO date string; if absent the date line is omitted */
  publishedAt?: string | null;
  /** Topic tags — rendered as clickable filter links */
  tags?: string[];
};

function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function NewsDetailsHeroSection({
  title,
  description,
  image,
  category,
  publishedAt,
  tags,
}: NewsDetailsHeroSectionProps) {
  return (
    <section id="news-details-hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex w-full flex-col items-center justify-center gap-8 border-x border-[#E5E7EB] px-3 pt-10 pb-0 md:px-12 md:pt-8">
          <div className="items-left flex max-w-[744px] flex-col justify-center gap-4 md:px-6">
            <Link
              href="/news"
              className="flex w-fit items-center gap-1 text-[14px] leading-[20px] tracking-[-0.084px] text-[var(--Subtext)] md:px-6"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00065 12.6666L3.33398 7.99992L8.00065 3.33325"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6673 8H3.33398"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to News
            </Link>

            <div className="min-h-[360px] w-full overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] md:hidden">
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="md:px-6">
              <Badge text={category?.trim() || "News & Insights"} />
            </div>
            <h1 className="max-w-[744px] text-[24px] leading-[1.2222222222222223] font-medium tracking-[-0.03em] md:px-6 md:text-[36px]">
              {title}
            </h1>

            <div className="flex flex-col gap-2 md:px-6">
              <p className="text-[var(--Subtext)]">{description}</p>
              {publishedAt && (
                <p className="text-[13px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
                  {formatArticleDate(publishedAt)}
                </p>
              )}
              {tags && tags.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <Link
                      key={tag}
                      href={buildNewsListingHref({ tag })}
                      className="inline-flex items-center rounded-full border border-[#E5E7EB] px-3 py-1 text-[12px] leading-[16px] tracking-[-0.01em] text-[#646464] transition-colors hover:border-[#006FFF] hover:text-[#006FFF]"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden min-h-[360px] w-full overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] md:block md:min-h-[360px]">
            {image && (
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsDetailsHeroSection;
