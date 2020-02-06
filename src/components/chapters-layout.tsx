import React from 'react'
import { PageProps } from '../types'
import Layout from './layout'

export default function ChaptersLayout ({
  children,
  ...props
}: PageProps) {
  console.log(props.pageContext.frontmatter)
  return (
    <Layout {...props}>
      <h1>{props.pageContext.frontmatter?.title}</h1>
      {children}
      {props.pageContext.frontmatter?.previous && <a href={props.pageContext.frontmatter.previous}>Forrige kapittel</a>}
      {props.pageContext.frontmatter?.next && <a href={props.pageContext.frontmatter.next}>Neste kapittel</a>}
    </Layout>
  )
}
