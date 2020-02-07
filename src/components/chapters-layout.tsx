import React, { ReactNode } from 'react'
import { PageProps } from '../types'
import Layout from './layout'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './header'
import Copyright from './copyright'

export default function ChaptersLayout ({
  children,
  ...props
}: PageProps<any>) {
  const data = useStaticQuery(graphql`
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
      <Header siteTitle={data.site.siteMetadata.title}/>
      <Layout className="chapter">
        <h1>
          {props.pageContext.frontmatter?.part && PartBit(props.pageContext.frontmatter!.part, props.pageContext.frontmatter!.partName!)}
          {props.pageContext.frontmatter?.chapter && ChapterBit(props.pageContext.frontmatter.chapter)}
          {props.pageContext.frontmatter?.title}
        </h1>
        {children}
        <nav className="chapter__nav">
          {props.pageContext.frontmatter?.previous && <a className="chapter__nav-previous" href={props.pageContext.frontmatter.previous}>Forrige kapittel</a>}
          {props.pageContext.frontmatter?.next && <a className="chapter__nav-next" href={props.pageContext.frontmatter.next}>Neste kapittel</a>}
        </nav>
      </Layout>
      <footer className="layout layout--footer footer">
        <Copyright />
      </footer>
    </>
  )
}

function ChapterBit (chapter: number): ReactNode {
  return <>
    <span>Kapittel {chapter}</span>
    <br/>
  </>
}

function PartBit (part: string, partName: string): ReactNode {
  return <>
    <span>Del {part} - {partName}</span>
    <br/>
  </>
}
