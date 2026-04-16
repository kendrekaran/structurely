/**
 * News article data layer.
 *
 * - **Sanity**: When `sanityClient` is configured (`NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env`),
 *   posts are loaded with GROQ from `sanity/queries.ts`. See `sanity/client.ts` for env vars.
 * - **Dummy data**: When the client is `null` (no project ID), all routes use `dummy-news.ts`.
 *   No CMS or token required for local development.
 */

import {
  dummyNewsPosts,
  getDummyNewsPostBySlug,
  type DummyNewsPost,
  type PortableTextBlock,
} from "./dummy-news";
import { sanityClient, urlForImage } from "@/sanity/client";
import {
  newsBySlugQuery,
  newsCategoriesQuery,
  newsListQuery,
} from "@/sanity/queries";
import type { SanityImageSource } from "@sanity/image-url";
import { unstable_cache } from "next/cache";

/** Shape compatible with both dummy and Sanity. */
export type NewsPost = Omit<DummyNewsPost, "thumbnail"> & {
  thumbnail?: string | Record<string, unknown>;
};

function getSanityNewsDocumentType(): string {
  const raw = process.env.NEXT_PUBLIC_SANITY_BLOG_DOCUMENT_TYPE?.trim();
  if (raw && /^[a-zA-Z0-9_]+$/.test(raw)) {
    return raw;
  }
  return "blogPost";
}

function toCategoryStrings(raw: unknown[]): string[] {
  return [...new Set(raw)]
    .filter((n): n is string => typeof n === "string" && n.length > 0)
    .sort((a, b) => a.localeCompare(b, "en"));
}

function sortByPublishedAt(posts: NewsPost[]): NewsPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function mapRelatedPosts(
  raw: unknown,
): DummyNewsPost["relatedBlogs"] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const mapped = raw
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const r = item as Record<string, unknown>;
      const slug = r.slug as { current?: string } | undefined;
      if (!slug?.current) return null;
      const thumb = r.thumbnail;
      const thumbStr =
        typeof thumb === "string"
          ? thumb
          : urlForImage(thumb as SanityImageSource);
      return {
        _id: String(r._id ?? ""),
        title: String(r.title ?? ""),
        description:
          typeof r.description === "string" ? r.description : undefined,
        slug: { current: slug.current },
        publishedAt: String(r.publishedAt ?? ""),
        ...(thumbStr ? { thumbnail: thumbStr } : {}),
      };
    })
    .filter(Boolean);
  return mapped.length ? (mapped as DummyNewsPost["relatedBlogs"]) : undefined;
}

function mapSanityPost(doc: Record<string, unknown>): NewsPost | null {
  if (doc._id == null || doc.title == null) return null;
  const slug = doc.slug as { current?: string } | undefined;
  if (!slug?.current) return null;

  const thumb = doc.thumbnail;
  let thumbnail: NewsPost["thumbnail"];
  if (typeof thumb === "string") {
    thumbnail = thumb;
  } else if (thumb && typeof thumb === "object") {
    const u = urlForImage(thumb as SanityImageSource);
    thumbnail = u ?? (thumb as Record<string, unknown>);
  }

  const authorRaw = doc.author;
  const author =
    authorRaw &&
    typeof authorRaw === "object" &&
    authorRaw !== null &&
    "name" in authorRaw
      ? { name: String((authorRaw as { name?: string }).name ?? "") }
      : undefined;

  return {
    _id: String(doc._id),
    title: String(doc.title),
    description:
      typeof doc.description === "string" ? doc.description : undefined,
    category: typeof doc.category === "string" ? doc.category : undefined,
    slug: { current: slug.current },
    publishedAt: String(doc.publishedAt ?? new Date().toISOString()),
    readTime: typeof doc.readTime === "number" ? doc.readTime : undefined,
    author,
    primaryKeywords: Array.isArray(doc.primaryKeywords)
      ? (doc.primaryKeywords as unknown[]).filter(
          (x): x is string => typeof x === "string",
        )
      : undefined,
    secondaryKeywords: Array.isArray(doc.secondaryKeywords)
      ? (doc.secondaryKeywords as unknown[]).filter(
          (x): x is string => typeof x === "string",
        )
      : undefined,
    content: Array.isArray(doc.content)
      ? (doc.content as PortableTextBlock[])
      : undefined,
    thumbnail,
    relatedBlogs: mapRelatedPosts(doc.relatedBlogs),
  };
}

async function fetchSanityNewsPosts(): Promise<NewsPost[]> {
  const rows = await sanityClient!.fetch<Record<string, unknown>[]>(
    newsListQuery,
    { type: getSanityNewsDocumentType() },
  );
  return rows
    .map((row) => mapSanityPost(row))
    .filter((p): p is NewsPost => p !== null);
}

const getCachedSanityNewsPosts = unstable_cache(
  fetchSanityNewsPosts,
  ["sanity-news-list"],
  { revalidate: 60 },
);

/** Returns unique category names for the filter bar. */
export async function getNewsCategories(): Promise<string[]> {
  if (!sanityClient) {
    const fromDummy = [
      ...new Set(dummyNewsPosts.map((b) => b.category).filter(Boolean)),
    ] as string[];
    return fromDummy.sort((a, b) => a.localeCompare(b, "en"));
  }

  const raw = await sanityClient.fetch<(string | null)[]>(
    newsCategoriesQuery,
    { type: getSanityNewsDocumentType() },
  );
  return toCategoryStrings(raw.filter((c): c is string => typeof c === "string"));
}

/** Returns all posts, sorted by `publishedAt` descending. */
export async function getNewsPosts(): Promise<NewsPost[]> {
  if (!sanityClient) {
    return sortByPublishedAt([...dummyNewsPosts]);
  }
  return sortByPublishedAt(await getCachedSanityNewsPosts());
}

/** Returns a single post by slug, or `null`. */
export async function getNewsPostBySlug(slug: string): Promise<NewsPost | null> {
  if (!sanityClient) {
    return getDummyNewsPostBySlug(slug);
  }

  return unstable_cache(
    async () => {
      const doc = await sanityClient!.fetch<Record<string, unknown> | null>(
        newsBySlugQuery,
        { type: getSanityNewsDocumentType(), slug },
      );
      if (!doc) return null;
      return mapSanityPost(doc);
    },
    ["sanity-news-by-slug", slug],
    { revalidate: 60 },
  )();
}
