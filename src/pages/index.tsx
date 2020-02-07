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
      <div className="index">
        <img className="index__logo" src="/cyb50.svg" alt="CYB50 logo"/>
        <h1 className="index__title">{data.site.siteMetadata.title}</h1>
      </div>
      <p>Velkommen til denne nettbaserte versjonen av jubileumsboken som ble gitt ut ifm Cybernetisk Selskab sitt 50-års jubileum i 2019.</p>
      <p>Her finner du boken i sin helhet, samt oversikt over korrigeringer som er gjort i etterkant av publisering.</p>
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
          chapter
          next
          order
          part
          partName
          previous
          short
          title
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
