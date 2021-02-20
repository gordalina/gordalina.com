import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import FooterLayout from "src/components/layout/FooterLayout"
import SEO from "src/components/SEO"
import { Article, ArticleQueryResponse } from "src/types"
import { fromArticleQueryResponse } from "../utils/article"

const shortcodes = { Link } // Provide common components here

interface ArticleTemplateProps {
  article: Article
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article }) => {
  return (
    <FooterLayout>
      <SEO title={article.title} />
      <article>
        <Styled.h1>{article.title}</Styled.h1>
        <Styled.p sx={{ color: "muted" }}>{article.date}</Styled.p>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{article.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </FooterLayout>
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
