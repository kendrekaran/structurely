/**
 * Build `/news` query strings for category, tag, search, and pagination.
 * Omits default/empty params for cleaner URLs.
 */
export type NewsListingParams = {
  category?: string;
  tag?: string;
  q?: string;
  page?: number;
};

export function buildNewsListingHref(params: NewsListingParams): string {
  const sp = new URLSearchParams();
  const cat = params.category?.trim();
  if (cat && cat !== "All") {
    sp.set("category", cat);
  }
  const tag = params.tag?.trim();
  if (tag && tag !== "All") {
    sp.set("tag", tag);
  }
  const q = params.q?.trim();
  if (q) {
    sp.set("q", q);
  }
  if (params.page != null && params.page > 1) {
    sp.set("page", String(params.page));
  }
  const qs = sp.toString();
  return qs ? `/news?${qs}` : "/news";
}
