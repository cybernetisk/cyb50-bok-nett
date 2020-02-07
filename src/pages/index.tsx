import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageProps } from '../types'
import { Chapters, Edge } from '../common/chapters'
import TableOfContents from '../components/table-of-contents'
import ListOfChanges, { Change } from '../components/list-of-changes'

interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMdx: {
    edges: {
      [key: string]: {
        node: Edge
      }
    }
  }
  allMarkdownRemark: {
    edges: {
      [key: string]: {
        node: Change
      }
    }
  }
}

export default function Index ({ data }: PageProps<Data>) {
  const chapters = Chapters.fromEdges(Object.values(data.allMdx.edges).map(edge => edge.node))
  const changes = Object.values(data.allMarkdownRemark.edges).map(edge => edge.node)
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
      <ListOfChanges changes={changes}/>
    </Layout>
  )
}

export const chaptersQuery = graphql`
query TableOfContentsQuery {
  site {
    siteMetadata {
      title
    }
  }
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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
        }
        html
      }
    }
  }
}
`
