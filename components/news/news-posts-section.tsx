import type { NewsPost } from "@/data/news-data";
import NewsCard from "@/components/news/news-card";

/** Matches `lg:grid-cols-3` so short rows get white cells instead of empty gray tracks. */
const NEWS_GRID_COLUMNS_LG = 3;

type NewsPostsSectionProps = {
  posts: NewsPost[];
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function NewsPostsSection({ posts }: NewsPostsSectionProps) {
  const rows: NewsPost[][] = [];
  for (let i = 0; i < posts.length; i += 3) {
    rows.push(posts.slice(i, i + 3));
  }

  if (posts.length === 0) {
    return (
      <section id="news-posts" className="relative z-0">
        <div className="px-global">
          <div className="max-w-global mx-auto border-x border-[#E5E7EB] px-6 py-16 text-center">
            <p className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#646464]">
              No articles match your filters. Try another category or search
              term.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news-posts" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="bg-border flex flex-col gap-px">
            {rows.map((row, rowIdx) => {
              const cells: (NewsPost | null)[] = [...row];
              while (cells.length < NEWS_GRID_COLUMNS_LG) {
                cells.push(null);
              }
              return (
                <div
                  key={rowIdx}
                  className="grid grid-cols-1 gap-px lg:grid-cols-3 lg:items-stretch"
                >
                  {cells.map((post, colIdx) =>
                    post ? (
                      <NewsCard
                        key={post._id}
                        title={post.title}
                        shortTitle={post.shortTitle}
                        description={post.description ?? ""}
                        date={formatDate(post.publishedAt)}
                        category={post.category}
                        tags={post.tags}
                        image={
                          typeof post.thumbnail === "string"
                            ? post.thumbnail
                            : undefined
                        }
                        imageAlt={post.thumbnailAlt}
                        slug={post.slug?.current}
                      />
                    ) : (
                      <div
                        key={`empty-${rowIdx}-${colIdx}`}
                        className="hidden bg-white lg:block"
                        aria-hidden
                      />
                    ),
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsPostsSection;
