/**
 * Sanity CMS client (read-only for the marketing site).
 *
 * ## When `sanityClient` is `null` (default)
 * - `NEXT_PUBLIC_SANITY_PROJECT_ID` is **not** set in the environment.
 * - News listing and detail pages use **dummy data** from `data/dummy-news.ts`.
 * - No network calls to Sanity — safe for local dev, previews, and builds without CMS secrets.
 *
 * ## When `sanityClient` is configured
 * - Set at minimum:
 *   - `NEXT_PUBLIC_SANITY_PROJECT_ID` — from [sanity.io/manage](https://sanity.io/manage)
 *   - Optionally `NEXT_PUBLIC_SANITY_DATASET` (defaults to `production`)
 *   - Optionally `NEXT_PUBLIC_SANITY_API_VERSION` (defaults to `2024-01-01`)
 * - News data is loaded via GROQ in `data/news-data.ts`.
 * - Align your Studio schema document `_type` with `NEXT_PUBLIC_SANITY_BLOG_DOCUMENT_TYPE`
 *   (defaults to `blogPost` — change if your schema uses e.g. `post`).
 *
 * ## Images
 * - Use `urlForImage()` for Sanity `image` / `sanity.imageAsset` objects so Next/Image gets absolute URLs.
 * - Dummy articles continue to use string paths under `/public`.
 */

import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2024-01-01";

function createSanityClient(): SanityClient | null {
  if (!projectId) {
    return null;
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
  });
}

/**
 * Resolves to a configured Sanity client, or `null` when the project ID is missing.
 * News code should branch on this and fall back to `dummy-news` when `null`.
 */
export const sanityClient = createSanityClient();

const imageBuilder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/**
 * Build a CDN URL for a Sanity image field. Returns `undefined` if the client is off,
 * the source is empty, or the builder throws (invalid asset).
 */
export function urlForImage(
  source: SanityImageSource | undefined | null,
): string | undefined {
  if (!imageBuilder || !source) {
    return undefined;
  }
  try {
    return imageBuilder.image(source).width(1600).auto("format").url();
  } catch {
    return undefined;
  }
}
