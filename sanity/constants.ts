/**
 * Sanity document `_type` for marketing news articles.
 * Must match the `name` in your Studio `defineType({ name: 'news', ... })`.
 *
 * Override only if your schema uses a different type string:
 * `NEXT_PUBLIC_SANITY_NEWS_DOCUMENT_TYPE`
 */
export function getSanityNewsDocumentType(): string {
  const raw = process.env.NEXT_PUBLIC_SANITY_NEWS_DOCUMENT_TYPE?.trim();
  if (raw && /^[a-zA-Z0-9_]+$/.test(raw)) {
    return raw;
  }
  return "news";
}
