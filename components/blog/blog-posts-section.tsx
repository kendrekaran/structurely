import type { BlogPost } from "@/data/blog-data";
import BlogCard from "@/components/blog/blog-card";

type BlogPostsSectionProps = {
  posts: BlogPost[];
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  const rows: BlogPost[][] = [];
  for (let i = 0; i < posts.length; i += 3) {
    rows.push(posts.slice(i, i + 3));
  }

  return (
    <section id="blog-posts" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col divide-y divide-[#E5E7EB]">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-1 divide-y divide-[#E5E7EB] lg:grid-cols-3 lg:divide-x lg:divide-y-0"
              >
                {row.map((post) => (
                  <BlogCard
                    key={post._id}
                    title={post.title}
                    description={post.description ?? ""}
                    date={formatDate(post.publishedAt)}
                    image={
                      typeof post.thumbnail === "string"
                        ? post.thumbnail
                        : undefined
                    }
                    slug={post.slug?.current}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPostsSection;
