/**
 * GROQ queries for news / blog documents (Sanity `_type` is often `blogPost`).
 *
 * Expected fields (adjust your Sanity schema to match, or change projections):
 * - `slug` (slug object with `current`)
 * - `title`, `description`, `category`, `publishedAt`
 * - `thumbnail` | `mainImage` | `image` | `heroImage` (image) — coalesced below
 * - `content` (portable text / block array)
 * - `relatedBlogs` | `relatedPosts` (references) — optional
 */

/** Single post shape reused in list and detail queries. */
export const newsPostProjection = `{
  _id,
  title,
  description,
  category,
  pinned,
  slug,
  publishedAt,
  readTime,
  author->{name},
  primaryKeywords,
  secondaryKeywords,
  content,
  "thumbnail": coalesce(thumbnail, mainImage, image, heroImage),
  "relatedBlogs": coalesce(relatedBlogs, relatedPosts)[]->{
    _id,
    title,
    description,
    slug,
    publishedAt,
    "thumbnail": coalesce(thumbnail, mainImage, image)
  }
}`;

export const newsListQuery = `
  *[_type == $type && defined(slug.current)] | order(publishedAt desc)
  ${newsPostProjection}
`;

export const newsBySlugQuery = `
  *[_type == $type && slug.current == $slug][0]
  ${newsPostProjection}
`;

/** Distinct category strings for the news listing filter UI. */
export const newsCategoriesQuery = `
  array::unique(*[_type == $type && defined(category)].category)
`;
