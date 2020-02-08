import React from 'react'
import DefinitionList from './definition-list'

interface Data {
  edges: {
    [id: number]: {
      node: {
        url: string
        description: string
      }
    }
  }
}

interface Props {
  data: Data
}

export default function Domains ({ data }: Props) {
  const domains = Object.values(data.edges).map(edge => [
    `<a href="https://${edge.node.url}">${edge.node.url}</a>`,
    edge.node.description
  ])
  return <DefinitionList data={domains}/>
}
