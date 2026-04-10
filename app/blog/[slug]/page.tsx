import Header from "@/components/_common/header";
import BlogDetailsHeroSection from "@/components/blog/blog-details-hero-section";
import BlogContentSection from "@/components/blog/blog-content-section";
import BlogRelatedArticlesSection from "@/components/blog/blog-related-articles-section";
import BlogShareSection from "@/components/blog/blog-share-section";
import { getBlogBySlug } from "@/data/blog-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterSection from "@/components/_common/footer-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) {
    return {
      title: "Post Not Found - Structurely Blog",
      description: "The requested blog post could not be found.",
    };
  }
  return {
    title: `${post.title} - Structurely Blog`,
    description: post.description ?? undefined,
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const thumbnailUrl =
    typeof post.thumbnail === "string" ? post.thumbnail : undefined;

  const relatedArticles = (post.relatedBlogs ?? []).map((rel) => ({
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
  }));

  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <BlogDetailsHeroSection
        title={post.title}
        intro={post.description ?? ""}
        description={post.description ?? ""}
        image={thumbnailUrl}
      />
      <BlogContentSection content={post.content} />
      <BlogShareSection />
      <BlogRelatedArticlesSection articles={relatedArticles} />
      <FooterSection />
    </main>
  );
}
