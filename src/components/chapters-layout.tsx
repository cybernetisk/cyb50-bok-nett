import React, { ReactNode } from 'react'
import { PageProps } from '../types'
import Layout from './layout'

export default function ChaptersLayout ({
  children,
  ...props
}: PageProps) {
  return (
    <Layout {...props}>
      <h1>
        {props.pageContext.frontmatter?.part && PartBit(props.pageContext.frontmatter!.part, props.pageContext.frontmatter!.partName!)}
        {props.pageContext.frontmatter?.chapter && ChapterBit(props.pageContext.frontmatter.chapter)}
        {props.pageContext.frontmatter?.title}
      </h1>
      {children}
      {props.pageContext.frontmatter?.previous && <a href={props.pageContext.frontmatter.previous}>Forrige kapittel</a>}
      {props.pageContext.frontmatter?.next && <a href={props.pageContext.frontmatter.next}>Neste kapittel</a>}
    </Layout>
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
