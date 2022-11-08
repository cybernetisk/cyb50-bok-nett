import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TableOfContents, { TableOfContentsData } from '../components/table-of-contents'
import ListOfChanges, { Change } from '../components/list-of-changes'
import AboutPage from '../components/about-page'
import Helmet from 'react-helmet'

interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMdx: TableOfContentsData,
  allMarkdownRemark: {
    edges: {
      [key: string]: {
        node: Change
      }
    }
  }
}

interface Props {
  data: Data
}

export default function Index({ data }: Props) {
  const changes = Object.values(data.allMarkdownRemark.edges).map(edge => edge.node)
  return (
    <Layout className="index">
      <SEO title={data.site.siteMetadata.title}/>
      <Helmet link={[
        { rel: 'next', href: '/forord' }
      ]}/>
      <header className="index__header">
        <img className="index__header-logo" src="/cyb50.svg" alt="CYB50 logo"/>
        <h1 className="index__header-title">{data.site.siteMetadata.title}</h1>
      </header>
      <section className="index__description">
        <p>
          Velkommen til den nettbaserte versjonen av jubileumsboken som ble gitt ut ifm Cybernetisk Selskab sitt
          50-års jubileum i 2019.
        </p>
        <p>
          Her finner du boken i sin helhet, samt oversikt over korrigeringer som er gjort i etterkant av
          publisering.
        </p>
        <p>
          Boken er også <a href="/cyb50-bok.pdf">tilgjengelig i PDF-format (51.7 MB)</a>.
        </p>
      </section>
      <TableOfContents data={data.allMdx} className="index__toc"/>
      <ListOfChanges changes={changes} className="index__loc"/>
      <AboutPage className="index__about"/>
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
  allMdx(sort: {frontmatter: {order: ASC}}) {
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
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
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
