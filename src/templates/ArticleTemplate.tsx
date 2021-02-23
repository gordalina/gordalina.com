import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import * as Headings from "src/components/Headings"

import Layout from "src/components/layout/Layout"
import SEO from "src/components/SEO"
import { Article, ArticleQueryResponse } from "src/types"
import { fromArticleQueryResponse } from "../utils/article"

interface ArticleTemplateProps {
  article: Article
}

const shortcodes = { Link, ...Headings } // Provide common components here

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article }) => {
  return (
    <Layout>
      <SEO title={article.title} />
      <article>
        <Headings.h1>{article.title}</Headings.h1>
        <Styled.p sx={{ color: "muted" }}>{article.date}</Styled.p>
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
