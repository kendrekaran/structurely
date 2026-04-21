/**
 * GROQ queries for `news` documents and `category` / `tag` references.
 *
 * Expected Studio schema (see your Sanity project):
 * - `news`: `slug`, `title`, `description`, `category` (ref → `category`), `pinned`, `publishedAt`,
 *   `thumbnail`, `primaryKeywords`, `secondaryKeywords`, `content`, `relatedNews` (refs → `news`),
 *   `tags` (array of refs → `tag`, or array of strings)
 * - `category`: `name`, `slug`
 * - `tag`: `name`, `slug`
 */

/** Single post shape reused in list and detail queries. */
export const newsPostProjection = `{
  _id,
  title,
  description,
  "category": category->name,
  "pinned": pinned,
  slug,
  publishedAt,
  primaryKeywords,
  secondaryKeywords,
  "tags": coalesce(
    tags[]->name,
    tags[],
    []
  ),
  content,
  "thumbnail": coalesce(thumbnail, mainImage, image, heroImage),
  "relatedBlogs": coalesce(relatedNews, relatedBlogs, relatedPosts)[]->{
    _id,
    title,
    description,
    slug,
    publishedAt,
    "thumbnail": coalesce(thumbnail, mainImage, image, heroImage)
  }
}`;

/** `$type` must be `news` (or your override from `sanity/constants.ts`), never `post` / `blogPost`. */
export const newsListQuery = `
  *[_type == $type && defined(slug.current)] | order(publishedAt desc)
  ${newsPostProjection}
`;

export const newsBySlugQuery = `
  *[_type == $type && slug.current == $slug][0]
  ${newsPostProjection}
`;

/** All category document names for the news listing filter (ordered). */
export const newsCategoriesQuery = `
  *[_type == "category" && defined(name)] | order(name asc) {
    name
  }
`;

/** All tag document names for the news listing filter (ordered). */
export const newsTagsQuery = `
  *[_type == "tag" && defined(name)] | order(name asc) {
    name
  }
`;
