import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -0.5em;
  list-style: none;
  position: relative;
`

const Item = styled.li`
  position: relative;
  flex-grow: 1;
  min-width: 150px;
  margin: 0.5em;
`

const InstagramFeed: React.FC = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allInstaNode(sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
              id
              timestamp
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 250, maxHeight: 250) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <List>
      {edges.map(({ node: photo }) => (
        <Item key={photo.id}>
          <a href={`https://www.instagram.com/p/${photo.id}/`}>
            <Img
              fluid={photo.localFile.childImageSharp.fluid}
              alt={photo.caption}
            />
          </a>
        </Item>
      ))}
    </List>
  )
}

export default InstagramFeed
