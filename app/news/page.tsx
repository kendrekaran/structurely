import Header from "@/components/_common/header";
import NewsFilterSection from "@/components/news/news-filter-section";
import NewsHeroSection from "@/components/news/news-hero-section";
import NewsPagination from "@/components/news/news-pagination";
import NewsPostsSection from "@/components/news/news-posts-section";
import Separator from "@/components/_ui/separator";
import { getNewsCategories, getNewsPosts } from "@/data/news-data";
import type { Metadata } from "next";
import FooterSection from "@/components/_common/footer-section";

export const metadata: Metadata = {
  title: "News - Structurely",
  description:
    "Insights on AI-powered lead engagement, CRM automation, and multi-channel sales for mortgage and real estate teams.",
};

type NewsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const { category: categoryParam } = await searchParams;
  const [allPosts, categories] = await Promise.all([
    getNewsPosts(),
    getNewsCategories(),
  ]);

  const currentCategory = categoryParam ?? "All";
  const filtered =
    !currentCategory || currentCategory === "All"
      ? allPosts
      : allPosts.filter(
          (post) =>
            (post.category ?? "").toLowerCase() ===
            currentCategory.toLowerCase(),
        );

  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <NewsHeroSection />
      <Separator />
      <NewsFilterSection
        categories={categories}
        currentCategory={currentCategory}
      />
      <Separator />
      <NewsPostsSection posts={filtered} />
      <NewsPagination />
      <FooterSection />
    </main>
  );
}
