import Header from "@/components/_common/header";
import NewsDetailsHeroSection from "@/components/news/news-details-hero-section";
import NewsContentSection from "@/components/news/news-content-section";
import NewsRelatedArticlesSection from "@/components/news/news-related-articles-section";
import NewsShareSection from "@/components/news/news-share-section";
import { getNewsPostBySlug, getNewsPosts } from "@/data/news-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterSection from "@/components/_common/footer-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);
  if (!post) {
    return {
      title: "Post Not Found - Structurely News",
      description: "The requested article could not be found.",
    };
  }
  return {
    title: `${post.title} - Structurely News`,
    description: post.description ?? undefined,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const thumbnailUrl =
    typeof post.thumbnail === "string" ? post.thumbnail : undefined;

  const explicitRelatedArticles = (post.relatedBlogs ?? [])
    .map((rel) => ({
      title: rel.title,
      description:
        "description" in rel && typeof rel.description === "string"
          ? rel.description
          : "",
      date: new Date(rel.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      slug: rel.slug?.current ?? "",
      image:
        "thumbnail" in rel && typeof rel.thumbnail === "string"
          ? rel.thumbnail
          : undefined,
    }))
    .filter((article) => article.slug.length > 0);

  const fallbackRelatedArticles =
    explicitRelatedArticles.length === 0
      ? (await getNewsPosts())
          .filter((item) => item.slug.current !== post.slug.current)
          .slice(0, 3)
          .map((item) => ({
            title: item.title,
            description: item.description ?? "",
            date: new Date(item.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
            slug: item.slug.current,
            image: typeof item.thumbnail === "string" ? item.thumbnail : undefined,
          }))
      : [];

  const relatedArticles =
    explicitRelatedArticles.length > 0
      ? explicitRelatedArticles
      : fallbackRelatedArticles;

  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <NewsDetailsHeroSection
        title={post.title}
        description={post.description ?? ""}
        image={thumbnailUrl}
        category={post.category}
        publishedAt={post.publishedAt ?? null}
      />
      <NewsContentSection content={post.content} />
      <NewsShareSection title={post.title} />
      {relatedArticles.length > 0 ? (
        <NewsRelatedArticlesSection articles={relatedArticles} />
      ) : null}
      <FooterSection />
    </main>
  );
}
