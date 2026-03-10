import Header from "@/components/_common/header";
import BlogFilterSection from "@/components/blog/blog-filter-section";
import BlogHeroSection from "@/components/blog/blog-hero-section";
import BlogPagination from "@/components/blog/blog-pagination";
import BlogPostsSection from "@/components/blog/blog-posts-section";
import Separator from "@/components/_ui/separator";
import { getBlogCategories, getBlogs } from "@/data/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Structurely",
  description:
    "Insights on AI-powered lead engagement, CRM automation, and multi-channel sales for mortgage and real estate teams.",
};

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category: categoryParam } = await searchParams;
  const [allBlogs, categories] = await Promise.all([
    getBlogs(),
    getBlogCategories(),
  ]);

  const currentCategory = categoryParam ?? "All";
  const filtered =
    !currentCategory || currentCategory === "All"
      ? allBlogs
      : allBlogs.filter(
          (post) =>
            (post.category ?? "").toLowerCase() ===
            currentCategory.toLowerCase(),
        );

  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <BlogHeroSection />
      <Separator />
      <BlogFilterSection
        categories={categories}
        currentCategory={currentCategory}
      />
      <Separator />
      <BlogPostsSection posts={filtered} />
      <BlogPagination />
    </main>
  );
}
