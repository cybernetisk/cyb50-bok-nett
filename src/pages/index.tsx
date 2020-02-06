import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageProps } from '../types'
import { Chapters } from '../common/chapters'
import TableOfContents from '../components/table-of-contents'

export default function Index (props: PageProps) {
  const chapters = Chapters.fromEdges(Object.values(props.data.allMdx.edges).map((edge: any) => edge.node))
  return (
    <Layout {...props}>
      <SEO title="Home"/>
      <h1>Hi people</h1>
      <p>Now go build something great.</p>
      <TableOfContents chapters={chapters.list}/>
    </Layout>
  )
}

export const chaptersQuery = graphql`
query MyQuery {
  allMdx {
    totalCount
    edges {
      node {
        body
        frontmatter {
          title
          chapter
          next
          part
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
}
`
