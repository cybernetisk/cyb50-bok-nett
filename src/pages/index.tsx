import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageProps } from '../types'
import { Chapters } from '../common/chapters'
import TableOfContents from '../components/table-of-contents'

export default function Index ({ data }: PageProps) {
  const chapters = Chapters.fromEdges(Object.values(data.allMdx.edges).map((edge: any) => edge.node))
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title}/>
      <h1>{data.site.siteMetadata.title}</h1>
      <TableOfContents chapters={chapters.list}/>
    </Layout>
  )
}

export const chaptersQuery = graphql`
query TableOfContentsQuery {
  allMdx(sort: {order: ASC, fields: frontmatter___order}) {
    edges {
      node {
        body
        frontmatter {
          title
          chapter
          next
          order
          part
          partName
          previous
        }
        parent {
          ... on File {
            relativePath
          }
        }
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}
`
