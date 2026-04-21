/**
 * Sanity CMS client (read-only for the marketing site).
 *
 * - News data is loaded via GROQ in `data/news-data.ts`.
 * - News `_type` is configured in `sanity/constants.ts` (default `news`).
 *
 * ## Images
 * - Use `urlForImage()` for Sanity `image` / `sanity.imageAsset` objects so Next/Image gets absolute URLs.
 * - Dummy articles continue to use string paths under `/public`.
 */

import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const client: SanityClient = createClient({
  projectId: "kptmy5fb",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

/** Same instance as `client`; existing code imports this name. */
export const sanityClient = client;

const imageBuilder = imageUrlBuilder(client);

/**
 * Build a CDN URL for a Sanity image field. Returns `undefined` if the source is empty
 * or the builder throws (invalid asset).
 */
export function urlForImage(
  source: SanityImageSource | undefined | null,
): string | undefined {
  if (!source) {
    return undefined;
  }
  try {
    return imageBuilder.image(source).width(1600).auto("format").url();
  } catch {
    return undefined;
  }
}
