import Link from "next/link";
import { buildNewsArticleHref } from "@/lib/news-article-url";

type NewsCardProps = {
  title: string;
  description: string;
  date: string;
  image?: string;
  /** Category label used to build /news/[category]/[slug]. */
  category?: string;
  /** When provided, the card is wrapped in a link to /news/[category]/[slug]. */
  slug?: string;
};

function NewsCard({ title, date, image, category, slug }: NewsCardProps) {
  const content = (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-white px-2 pt-2">
        <div className="h-[200px] overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-6 px-3 md:px-6">
        <h3 className="text-[16px] leading-[26px] font-medium tracking-[-0.01em]">
          {title}
        </h3>
        <p className="text-[14px] leading-[24px] tracking-[-0.006em]">{date}</p>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link
        href={buildNewsArticleHref({ slug, category })}
        className="group flex cursor-pointer flex-col"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="group flex cursor-pointer flex-col">{content}</article>
  );
}

export default NewsCard;
