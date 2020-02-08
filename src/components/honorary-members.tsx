import React from 'react'
import DefinitionList from './definition-list'

interface Data {
  edges: {
    [id: number]: {
      node: {
        name: string
        date: string
      }
    }
  }
}

interface Props {
  data: Data
}

export default function HonoraryMembers ({ data }: Props) {
  const people = Object.values(data.edges).map(edge => [
    formatDate(edge.node.date),
    edge.node.name
  ])
  return <DefinitionList data={people}/>
}

function formatDate (dateString: string): string {
  if (!dateString) return 'Ukjent'
  const date = new Date(dateString)
  return date.toLocaleDateString('no', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
