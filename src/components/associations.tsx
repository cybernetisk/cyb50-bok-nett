import React from 'react'
import DefinitionList from './definition-list'

interface Data {
  edges: {
    [id: number]: {
      node: {
        active: '0' | '1'
        name: string
        description: string
      }
    }
  }
}

interface Props {
  active: boolean
  data: Data
}

export default function Associations ({ active, data }: Props) {
  const activeString = active ? '1' : '0'
  const associations = Object.values(data.edges)
    .map(edge => edge.node)
    .filter(node => node.active === activeString)
    .map(node => [node.name, node.description])
  return <DefinitionList data={associations}/>
}
