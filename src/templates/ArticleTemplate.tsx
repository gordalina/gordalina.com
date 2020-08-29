import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import Layout from "src/components/layout/Layout"
import SEO from "src/components/SEO"
import { Article, ArticleQueryResponse } from "src/types"
import { fromArticleQueryResponse } from "../utils/article"

const shortcodes = { Link } // Provide common components here

interface ArticleTemplateProps {
  article: Article
}

const ArticleTemplate: React.SFC<ArticleTemplateProps> = ({ article }) => {
  return (
    <Layout>
      <SEO title={article.title} />
      <article>
        <h1>{article.title}</h1>
        <p>{article.date}</p>
        <MDXProvider components={shortcodes}>
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
