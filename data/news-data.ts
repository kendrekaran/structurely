/**
 * News article data layer.
 *
 * - **Sanity**: Posts load via GROQ (`sanity/queries.ts`) with `_type` `news`
 *   (see `sanity/constants.ts`; optional `NEXT_PUBLIC_SANITY_NEWS_DOCUMENT_TYPE`).
 * - **Dummy data**: When the client is unavailable, routes use `dummy-news.ts`.
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
import { getSanityNewsDocumentType } from "@/sanity/constants";

/** Resolved once per server bundle; GROQ `*[_type == $type]` uses this value. */
const SANITY_NEWS_DOC_TYPE = getSanityNewsDocumentType();

/** Shape compatible with both dummy and Sanity. */
export type NewsPost = Omit<DummyNewsPost, "thumbnail"> & {
  thumbnail?: string | Record<string, unknown>;
};

/** Normalize boolean from GROQ / API (handles rare string or numeric forms). */
function parsePinned(raw: unknown): boolean {
  if (raw === true) return true;
  if (raw === false || raw == null) return false;
  if (typeof raw === "string") {
    const s = raw.trim().toLowerCase();
    return s === "true" || s === "1" || s === "yes";
  }
  if (typeof raw === "number") return raw === 1;
  return false;
}

function categoryLabelFromSanity(raw: unknown): string | undefined {
  if (typeof raw === "string" && raw.trim()) return raw.trim();
  if (
    raw &&
    typeof raw === "object" &&
    "name" in raw &&
    typeof (raw as { name?: unknown }).name === "string"
  ) {
    const n = (raw as { name: string }).name.trim();
    return n || undefined;
  }
  return undefined;
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

  return {
    _id: String(doc._id),
    title: String(doc.title),
    description:
      typeof doc.description === "string" ? doc.description : undefined,
    category: categoryLabelFromSanity(doc.category),
    pinned: parsePinned(doc.pinned),
    slug: { current: slug.current },
    publishedAt: String(doc.publishedAt ?? new Date().toISOString()),
    readTime: typeof doc.readTime === "number" ? doc.readTime : undefined,
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
    { type: SANITY_NEWS_DOC_TYPE },
  );
  return rows
    .map((row) => mapSanityPost(row))
    .filter((p): p is NewsPost => p !== null);
}

const getCachedSanityNewsPosts = unstable_cache(
  fetchSanityNewsPosts,
  ["sanity-news-list", SANITY_NEWS_DOC_TYPE],
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

  const rows = await sanityClient.fetch<{ name?: string | null }[]>(
    newsCategoriesQuery,
  );
  const names = rows
    .map((r) => (typeof r.name === "string" ? r.name.trim() : ""))
    .filter((n) => n.length > 0);
  return [...new Set(names)].sort((a, b) => a.localeCompare(b, "en"));
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
        { type: SANITY_NEWS_DOC_TYPE, slug },
      );
      if (!doc) return null;
      return mapSanityPost(doc);
    },
    ["sanity-news-by-slug", SANITY_NEWS_DOC_TYPE, slug],
    { revalidate: 60 },
  )();
}
