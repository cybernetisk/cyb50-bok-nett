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
          {props.pageContext.frontmatter?.partName && PartBit(props.pageContext.frontmatter as PartProps)}
          {props.pageContext.frontmatter?.chapter && ChapterBit(props.pageContext.frontmatter.chapter)}
          {!props.pageContext.frontmatter?.partName && props.pageContext.frontmatter?.title}
        </h1>
        {props.pageContext.frontmatter?.author && <p>Skrevet av: {props.pageContext.frontmatter.author}</p>}
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

interface PartProps {
  part: string
  partNo: number
  partName: string
}
function PartBit ({ part, partNo, partName }: PartProps): ReactNode {
  return <>
    Del <span aria-hidden={true}>{part}</span><span className="sr sr--hidden">{partNo}</span><br/>
    {partName}
  </>
}
