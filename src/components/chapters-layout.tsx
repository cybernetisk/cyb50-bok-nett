import React, { ReactNode } from 'react'
import Layout from './layout'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './header'
import License from './license'
import Helmet from 'react-helmet'
import { TableOfContentsData } from './table-of-contents'

interface Frontmatter {
  author?: string
  chapter?: number
  license?: string
  next?: string
  order: number
  part: string
  partNo?: number
  partName?: string
  previous?: string
  title: string
}

type LinkProps = JSX.IntrinsicElements['link']

interface Props {
  children: ReactNode
  pageContext: {
    frontmatter: Frontmatter
  }
}

interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMdx: TableOfContentsData
}

export default function ChaptersLayout ({ children, pageContext }: Props) {
  const data = query()
  const chapters = Object.values(data.allMdx.edges).map(edge => edge.node)
  const chapterIndex = chapters.findIndex(chapter => chapter.frontmatter.order === pageContext.frontmatter.order)
  return (
    <>
      <Helmet link={[
        { rel: 'prev', href: pageContext.frontmatter.previous || '/' },
        { rel: 'next', href: pageContext.frontmatter.next || '/' }
      ]}/>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <Layout className="chapter">
        <h1>
          {pageContext.frontmatter.partName && PartBit(pageContext.frontmatter)}
          {pageContext.frontmatter.chapter && ChapterBit(pageContext.frontmatter.chapter)}
          {!pageContext.frontmatter.partName && TitleBit(pageContext.frontmatter.title)}
        </h1>
        {pageContext.frontmatter.author && <p>Skrevet av {pageContext.frontmatter.author}</p>}
        {children}
        <nav className="chapter__nav">
          {pageContext.frontmatter.previous && (
            <a className="chapter__nav-link chapter__nav-link--previous" href={pageContext.frontmatter.previous}>
              <span className="chapter__nav-link-description">Forrige side</span>
              <br/>
              <span className="chapter__nav-link-name">{chapters[chapterIndex - 1].frontmatter.title}</span>
            </a>
          )}
          {pageContext.frontmatter.next && (
            <a className="chapter__nav-link chapter__nav-link--next" href={pageContext.frontmatter.next}>
              <span className="chapter__nav-link-description">Neste side</span>
              <br />
              <span className="chapter__nav-link-name">{chapters[chapterIndex + 1].frontmatter.title}</span>
            </a>
          )}
        </nav>
      </Layout>
      {pageContext.frontmatter.license && <footer className="layout layout--footer footer">
        <License license={pageContext.frontmatter.license}/>
      </footer>}
    </>
  )
}

function query () {
  return useStaticQuery<Data>(graphql`
    query SiteTitleQuery {
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
    }
  `)
}

function TitleBit (title: string) {
  return <span dangerouslySetInnerHTML={({ __html: title })}/>
}

function ChapterBit (chapter: number): ReactNode {
  return <>
    <span>Kapittel {chapter}</span>
    <br/>
  </>
}

function PartBit ({ part, partNo, partName }: Frontmatter): ReactNode {
  return <>
    Del <span aria-hidden={true}>{part}</span><span className="sr sr--hidden">{partNo}</span><br/>
    {partName}
  </>
}
