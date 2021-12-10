import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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

export const InstagramFeed: React.FC = () => {
  const {
    allInstagramContent: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allInstagramContent {
          edges {
            node {
              id
              timestamp
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 250, height: 250, formats: [WEBP])
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
            <GatsbyImage
              image={!photo.localFile ? console.log(photo) : photo.localFile.childImageSharp.gatsbyImageData}
              alt={photo.caption || ``}
            />
          </a>
        </Item>
      ))}
    </List>
  )
}

export default InstagramFeed
