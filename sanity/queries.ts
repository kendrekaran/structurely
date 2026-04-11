/**
 * GROQ queries for blog documents.
 *
 * Expected fields (adjust your Sanity schema to match, or change projections):
 * - `slug` (slug object with `current`)
 * - `title`, `description`, `category`, `publishedAt`
 * - `thumbnail` | `mainImage` | `image` | `heroImage` (image) — coalesced below
 * - `content` (portable text / block array)
 * - `relatedBlogs` | `relatedPosts` (references) — optional
 */

/** Single post shape reused in list and detail queries. */
export const blogPostProjection = `{
  _id,
  title,
  description,
  category,
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

export const blogsListQuery = `
  *[_type == $type && defined(slug.current)] | order(publishedAt desc)
  ${blogPostProjection}
`;

export const blogBySlugQuery = `
  *[_type == $type && slug.current == $slug][0]
  ${blogPostProjection}
`;

/** Distinct category strings for the blog filter UI. */
export const blogCategoriesQuery = `
  array::unique(*[_type == $type && defined(category)].category)
`;
