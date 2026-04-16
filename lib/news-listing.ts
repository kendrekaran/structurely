import type { NewsPost } from "@/data/news-data";

export const NEWS_PAGE_SIZE = 6;

export function pickPinnedPost(posts: NewsPost[]): NewsPost | null {
  const pinned = posts.filter((p) => p.pinned === true);
  if (!pinned.length) return null;
  return [...pinned].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )[0]!;
}

export function filterUnpinned(posts: NewsPost[]): NewsPost[] {
  return posts.filter((p) => p.pinned !== true);
}

export function applyCategoryFilter(
  posts: NewsPost[],
  category: string,
): NewsPost[] {
  if (!category || category === "All") return posts;
  return posts.filter(
    (p) => (p.category ?? "").toLowerCase() === category.toLowerCase(),
  );
}

export function applySearchQuery(posts: NewsPost[], q: string): NewsPost[] {
  const s = q.trim().toLowerCase();
  if (!s) return posts;
  return posts.filter((p) => {
    const t = p.title.toLowerCase();
    const d = (p.description ?? "").toLowerCase();
    const c = (p.category ?? "").toLowerCase();
    return t.includes(s) || d.includes(s) || c.includes(s);
  });
}
