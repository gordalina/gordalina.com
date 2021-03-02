import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Headings, Link } from "src/components"

export const ArticlesList: React.FC = () => {
  const { allMdx: { edges } } = useStaticQuery(graphql`
    query {
      allMdx (
        filter: {
          fields: { slug: { ne: "" } },
          frontmatter: { hide: { ne: true } }
        },
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              hide
              date(formatString: "MMMM do, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <ol sx={{ m: 0, p: 0, listStyle: 'none' }}>
      {edges.map(({ node: article }) => (
        <li key={article.id}>
          <Headings.h3 id={article.fields.slug}>
            <Link to={`/articles/${article.fields.slug}`}>
              {article.frontmatter.title}
            </Link>
          </Headings.h3>

          <span sx={{ color: `muted` }}>{article.frontmatter.date}</span>
          <p>{article.excerpt}</p>
        </li>
      ))
      }
    </ol>
  )
}

export default ArticlesList
