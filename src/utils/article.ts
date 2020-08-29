import { Article, ArticleQueryResponse } from "src/types"

export const fromArticleQueryResponse = (
  response: ArticleQueryResponse
): Article => {
  const {
    id,
    body,
    excerpt,
    fields: { slug },
    frontmatter: { date, hide, summary, title },
  } = response.data.mdx

  return {
    id,
    body,
    date,
    excerpt,
    hide,
    slug,
    summary,
    title,
  }
}
