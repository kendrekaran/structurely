import Header from "@/components/_common/header";
import NewsDetailsHeroSection from "@/components/news/news-details-hero-section";
import NewsContentSection from "@/components/news/news-content-section";
import NewsRelatedArticlesSection from "@/components/news/news-related-articles-section";
import NewsShareSection from "@/components/news/news-share-section";
import { getNewsPostBySlug, getNewsPosts } from "@/data/news-data";
import { buildNewsArticleHref, toCategorySlug } from "@/lib/news-article-url";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import FooterSection from "@/components/_common/footer-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);
  if (!post) {
    return {
      title: "Post Not Found - Structurely News",
      description: "The requested article could not be found.",
    };
  }

  // SEO fields fall back to their base equivalents when not set.
  const metaTitle = post.seoTitle
    ? `${post.seoTitle} - Structurely News`
    : `${post.title} - Structurely News`;
  const metaDescription = post.seoDescription ?? post.description ?? undefined;
  const thumbnailUrl =
    typeof post.thumbnail === "string" ? post.thumbnail : undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: metaDescription,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      ...(thumbnailUrl
        ? {
            images: [
              {
                url: thumbnailUrl,
                alt: post.thumbnailAlt ?? post.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: metaDescription,
      ...(thumbnailUrl ? { images: [thumbnailUrl] } : {}),
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalCategory = toCategorySlug(post.category);
  if (category !== canonicalCategory) {
    redirect(buildNewsArticleHref({ slug, category: post.category }));
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
      category: "category" in rel ? rel.category : undefined,
      image:
        "thumbnail" in rel && typeof rel.thumbnail === "string"
          ? rel.thumbnail
          : undefined,
    }))
    .filter((article) => article.slug.length > 0);

  const fallbackRelatedArticles: typeof explicitRelatedArticles = [];
  if (explicitRelatedArticles.length === 0) {
    const allPosts = await getNewsPosts();
    const otherPosts = allPosts.filter(
      (item) => item.slug.current !== post.slug.current,
    );

    // Prefer posts that share the first tag of the current article.
    const firstTag = post.tags?.[0];
    const tagMatchedPosts =
      firstTag && firstTag.length > 0
        ? otherPosts.filter((item) =>
            item.tags?.some((t) => t.toLowerCase() === firstTag.toLowerCase()),
          )
        : [];

    const sourcePosts =
      tagMatchedPosts.length > 0 ? tagMatchedPosts : otherPosts;

    const mapped = sourcePosts.slice(0, 3).map((item) => ({
      title: item.title,
      description: item.description ?? "",
      date: new Date(item.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      slug: item.slug.current,
      category: item.category,
      image: typeof item.thumbnail === "string" ? item.thumbnail : undefined,
    }));
    fallbackRelatedArticles.push(...mapped);
  }

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
        imageAlt={post.thumbnailAlt}
        category={post.category}
        publishedAt={post.publishedAt ?? null}
        tags={post.tags}
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
