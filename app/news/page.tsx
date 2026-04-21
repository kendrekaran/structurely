import Header from "@/components/_common/header";
import NewsFilterSection from "@/components/news/news-filter-section";
import NewsHeroSection from "@/components/news/news-hero-section";
import NewsPagination from "@/components/news/news-pagination";
import NewsPostsSection from "@/components/news/news-posts-section";
import NewsTagsSection from "@/components/news/news-tags-section";
import Separator from "@/components/_ui/separator";
import { getNewsCategories, getNewsPosts, getNewsTags } from "@/data/news-data";
import {
  NEWS_PAGE_SIZE,
  applyCategoryFilter,
  applyTagFilter,
  applySearchQuery,
  filterUnpinned,
  pickPinnedPosts,
} from "@/lib/news-listing";
import { buildNewsListingHref } from "@/lib/news-listing-url";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import FooterSection from "@/components/_common/footer-section";

export const metadata: Metadata = {
  title: "News - Structurely",
  description:
    "Insights on AI-powered lead engagement, CRM automation, and multi-channel sales for mortgage and real estate teams.",
};

type NewsPageProps = {
  searchParams: Promise<{
    category?: string;
    tag?: string;
    q?: string;
    page?: string;
  }>;
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const categoryParam = params.category ?? "All";
  const tagParam = params.tag ?? "All";
  const searchQuery = params.q ?? "";
  const rawPage = Number.parseInt(params.page ?? "1", 10);
  const requestedPage = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  const [allPosts, categories, tags] = await Promise.all([
    getNewsPosts(),
    getNewsCategories(),
    getNewsTags(),
  ]);

  const pinnedPosts = pickPinnedPosts(allPosts);

  let unpinned = filterUnpinned(allPosts);
  unpinned = applyCategoryFilter(unpinned, categoryParam);
  unpinned = applyTagFilter(unpinned, tagParam);
  unpinned = applySearchQuery(unpinned, searchQuery);

  const totalPages = Math.max(1, Math.ceil(unpinned.length / NEWS_PAGE_SIZE));
  const currentPage = Math.min(requestedPage, totalPages);
  if (requestedPage !== currentPage) {
    redirect(
      buildNewsListingHref({
        category:
          categoryParam && categoryParam !== "All" ? categoryParam : undefined,
        tag: tagParam && tagParam !== "All" ? tagParam : undefined,
        q: searchQuery.trim() || undefined,
        page: currentPage > 1 ? currentPage : undefined,
      }),
    );
  }
  const start = (currentPage - 1) * NEWS_PAGE_SIZE;
  const paginatedPosts = unpinned.slice(start, start + NEWS_PAGE_SIZE);

  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <NewsHeroSection featuredPosts={pinnedPosts} />
      <Separator />
      <NewsFilterSection
        categories={categories}
        currentCategory={categoryParam}
        currentTag={tagParam}
        searchQuery={searchQuery}
      />
      <NewsTagsSection
        tags={tags}
        currentTag={tagParam}
        currentCategory={categoryParam}
        searchQuery={searchQuery}
      />
      <Separator />
      <NewsPostsSection posts={paginatedPosts} />
      <NewsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        category={categoryParam}
        searchQuery={searchQuery}
      />
      <FooterSection />
    </main>
  );
}
