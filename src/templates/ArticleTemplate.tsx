import React from "react"
import { graphql } from "gatsby"
import { Themed } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { SEO, Layout, Headings, Link } from "src/components"
import { Article, ArticleQueryResponse } from "src/types"
import { fromArticleQueryResponse } from "../utils/article"

interface ArticleTemplateProps {
  article: Article
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article }) => {
  return (
    <Layout>
      <SEO title={article.title} />
      <article>
        <Headings.h1>{article.title}</Headings.h1>
        <Themed.p sx={{ color: "muted" }}>{article.date}</Themed.p>
        <MDXProvider components={{ Link, ...Headings }}>
          <MDXRenderer>{article.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        hide
        summary
        title
      }
    }
  }
`

export default (response: ArticleQueryResponse) => (
  <ArticleTemplate article={fromArticleQueryResponse(response)} />
)
