export function toCategorySlug(category?: string | null): string {
  if (!category) return "general";
  const normalized = category
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || "general";
}

export function buildNewsArticleHref(params: {
  slug: string;
  category?: string | null;
}): string {
  return `/news/${toCategorySlug(params.category)}/${params.slug}`;
}
