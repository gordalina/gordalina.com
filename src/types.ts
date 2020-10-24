import { FluidObject } from "gatsby-image"

export interface Article {
  id: string
  body: string
  date: string
  excerpt: string
  hide: boolean
  slug: string
  summary: string
  title: string
}

export interface ArticleQueryResponse {
  data: {
    mdx: {
      id: string
      body: string
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        hide: boolean
        summary: string
        title: string
      }
    }
  }
}

export interface InstagramPhoto {
  caption: string
  id: string
  mediaType: string
  timestamp: number
  localFile: {
    childImageSharp: {
      fixed: FluidObject
    }
  }
}

export interface MusicTrack {
  name: string
  year: number
  src: string
}
