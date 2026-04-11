/**
 * Blog data layer.
 *
 * - **Sanity**: When `sanityClient` is configured (`NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env`),
 *   posts are loaded with GROQ from `sanity/queries.ts`. See `sanity/client.ts` for env vars.
 * - **Dummy data**: When the client is `null` (no project ID), all routes use `dummy-blogs.ts`.
 *   No CMS or token required for local development.
 */

import {
  dummyBlogs,
  getDummyBlogBySlug,
  type DummyBlogPost,
  type PortableTextBlock,
} from "./dummy-blogs";
import { sanityClient, urlForImage } from "@/sanity/client";
import {
  blogBySlugQuery,
  blogCategoriesQuery,
  blogsListQuery,
} from "@/sanity/queries";
import type { SanityImageSource } from "@sanity/image-url";
import { unstable_cache } from "next/cache";

/** Shape compatible with both dummy and Sanity. */
export type BlogPost = Omit<DummyBlogPost, "thumbnail"> & {
  thumbnail?: string | Record<string, unknown>;
};

function getBlogDocumentType(): string {
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

function sortByPublishedAt(blogs: BlogPost[]): BlogPost[] {
  return [...blogs].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function mapRelatedBlogs(
  raw: unknown,
): DummyBlogPost["relatedBlogs"] | undefined {
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
  return mapped.length ? (mapped as DummyBlogPost["relatedBlogs"]) : undefined;
}

function mapSanityPost(doc: Record<string, unknown>): BlogPost | null {
  if (doc._id == null || doc.title == null) return null;
  const slug = doc.slug as { current?: string } | undefined;
  if (!slug?.current) return null;

  const thumb = doc.thumbnail;
  let thumbnail: BlogPost["thumbnail"];
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
    relatedBlogs: mapRelatedBlogs(doc.relatedBlogs),
  };
}

async function fetchSanityBlogs(): Promise<BlogPost[]> {
  const rows = await sanityClient!.fetch<Record<string, unknown>[]>(
    blogsListQuery,
    { type: getBlogDocumentType() },
  );
  return rows
    .map((row) => mapSanityPost(row))
    .filter((p): p is BlogPost => p !== null);
}

const getCachedSanityBlogs = unstable_cache(
  fetchSanityBlogs,
  ["sanity-blogs-list"],
  { revalidate: 60 },
);

/** Returns unique category names for the filter bar. */
export async function getBlogCategories(): Promise<string[]> {
  if (!sanityClient) {
    const fromDummy = [
      ...new Set(dummyBlogs.map((b) => b.category).filter(Boolean)),
    ] as string[];
    return fromDummy.sort((a, b) => a.localeCompare(b, "en"));
  }

  const raw = await sanityClient.fetch<(string | null)[]>(
    blogCategoriesQuery,
    { type: getBlogDocumentType() },
  );
  return toCategoryStrings(raw.filter((c): c is string => typeof c === "string"));
}

/** Returns all blog posts, sorted by `publishedAt` descending. */
export async function getBlogs(): Promise<BlogPost[]> {
  if (!sanityClient) {
    return sortByPublishedAt([...dummyBlogs]);
  }
  return sortByPublishedAt(await getCachedSanityBlogs());
}

/** Returns a single post by slug, or `null`. */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    return getDummyBlogBySlug(slug);
  }

  return unstable_cache(
    async () => {
      const doc = await sanityClient!.fetch<Record<string, unknown> | null>(
        blogBySlugQuery,
        { type: getBlogDocumentType(), slug },
      );
      if (!doc) return null;
      return mapSanityPost(doc);
    },
    ["sanity-blog-by-slug", slug],
    { revalidate: 60 },
  )();
}
