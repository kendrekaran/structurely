/**
 * Blog data layer. Uses Sanity when NEXT_PUBLIC_USE_SANITY_BLOG !== "false";
 * otherwise falls back to dummy data from ./dummy-blogs.
 * When switching to Sanity: add @/sanity/client, uncomment the Sanity branches,
 * and ensure blog schema matches BlogPost / DummyBlogPost shape.
 */

import {
  dummyBlogs,
  getDummyBlogBySlug,
  type DummyBlogPost,
} from "./dummy-blogs";

/** Set to "true" in .env when Sanity is configured to use Sanity blog data. */
const USE_SANITY_BLOG = process.env.NEXT_PUBLIC_USE_SANITY_BLOG === "true";

/** Shape compatible with both dummy and Sanity. thumbnail: string (dummy) or Sanity image ref when using Sanity. */
export type BlogPost = Omit<DummyBlogPost, "thumbnail"> & {
  thumbnail?: string | Record<string, unknown>;
};

// When using Sanity, add:
// import { client } from "@/sanity/client";
// and GROQ queries for getBlogs, getBlogBySlug, getBlogCategories (see content-rewards/data/blog-data.ts for reference).

function toCategoryStrings(raw: unknown[]): string[] {
  return [...new Set(raw)]
    .filter((n): n is string => typeof n === "string" && n.length > 0)
    .sort((a, b) => a.localeCompare(b, "en"));
}

/** Returns unique category names. Use for filter bar. When on Sanity, fetch from category documents or from blogs. */
export async function getBlogCategories(): Promise<string[]> {
  if (USE_SANITY_BLOG) {
    // TODO: await client.fetch(ALL_CATEGORIES_QUERY) or CATEGORIES_FROM_BLOGS_QUERY
    return toCategoryStrings(dummyBlogs.map((b) => b.category).filter(Boolean) as string[]);
  }
  const fromDummy = [
    ...new Set(dummyBlogs.map((b) => b.category).filter(Boolean)),
  ] as string[];
  return fromDummy.sort((a, b) => a.localeCompare(b, "en"));
}

/** Returns all blog posts, sorted by publishedAt desc. When on Sanity, fetch via GROQ. */
export async function getBlogs(): Promise<BlogPost[]> {
  if (USE_SANITY_BLOG) {
    // TODO: const blogs = await client.fetch(BLOGS_QUERY, {}, { next: { revalidate: 30 } });
    // return blogs ?? [];
    return [...dummyBlogs].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
  }
  return [...dummyBlogs].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

/** Returns a single post by slug, or null. When on Sanity, fetch via BLOG_QUERY. */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  if (USE_SANITY_BLOG) {
    // TODO: const blog = await client.fetch(BLOG_QUERY, { slug }, { next: { revalidate: 30 } });
    // return blog ?? null;
    return getDummyBlogBySlug(slug);
  }
  return getDummyBlogBySlug(slug);
}
