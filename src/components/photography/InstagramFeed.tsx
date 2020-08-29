import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { InstagramPhoto } from "src/types"
import { device } from "src/utils/device"

const List = styled.ul`
  list-style: none;
  margin-left: 0;

  display: flex;
  flex-wrap: wrap;

  width: calc(100% + 1em);

  @media ${device.tablet} {
    justify-content: space-evenly;
    width: calc(100% + 0.5em);
  }
`

const Item = styled.li`
  width: 100%;
  max-width: 250px;
  transition: ease-out transform 0.25s;

  margin: 0 1em 1em 0;

  &:hover {
    transform: scale(1.075);
  }

  @media ${device.tablet} {
    max-width: 150px;
    margin: 0 0.5em 0.5em 0;
  }
`

const InstagramFeed: React.SFC = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allInstaNode {
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

  const photos: InstagramPhoto[] = edges.map(edge => edge.node)
  photos.sort((a, b) => b.timestamp - a.timestamp)

  return (
    <List>
      {photos.map(photo => (
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
