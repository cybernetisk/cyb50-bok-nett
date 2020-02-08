import React, { ReactNode } from 'react'
import Layout from './layout'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './header'
import Copyright from './copyright'
import Helmet from 'react-helmet'

interface Frontmatter {
  author?: string
  chapter?: number
  next?: string
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
}

export default function ChaptersLayout ({ children, pageContext }: Props) {
  const data = useStaticQuery<Data>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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
          {pageContext.frontmatter.previous &&
          <a className="chapter__nav-previous" href={pageContext.frontmatter.previous}>Forrige side</a>}
          {pageContext.frontmatter.next &&
          <a className="chapter__nav-next" href={pageContext.frontmatter.next}>Neste side</a>}
        </nav>
      </Layout>
      <footer className="layout layout--footer footer">
        <Copyright/>
      </footer>
    </>
  )
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
