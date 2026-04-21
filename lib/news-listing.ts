import type { NewsPost } from "@/data/news-data";

export const NEWS_PAGE_SIZE = 6;

/** True when the post is the Sanity “pinned” / featured hero item. */
export function isPinnedNewsPost(p: NewsPost): boolean {
  return p.pinned === true;
}

/** All pinned posts, newest first (hero order). */
export function pickPinnedPosts(posts: NewsPost[]): NewsPost[] {
  return posts
    .filter(isPinnedNewsPost)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

/** Newest pinned post only; prefer `pickPinnedPosts` when showing multiple. */
export function pickPinnedPost(posts: NewsPost[]): NewsPost | null {
  const rows = pickPinnedPosts(posts);
  return rows[0] ?? null;
}

export function filterUnpinned(posts: NewsPost[]): NewsPost[] {
  return posts.filter((p) => !isPinnedNewsPost(p));
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
