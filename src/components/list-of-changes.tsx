import React from 'react'

export interface Change {
  id: string
  html: string
  frontmatter: {
    date: string
    title: string
  }
}

interface Props {
  changes: Change[]
}

export default function ListOfChanges ({ changes }: Props) {
  console.log(changes)
  return <>
    <h2>Endringslogg</h2>
    <ul>
      {changes.map(change => (
        <li key={change.id}>
          <strong>{change.frontmatter.date} - {change.frontmatter.title}</strong>
          <div dangerouslySetInnerHTML={({ __html: change.html })}></div>
        </li>
      ))}
    </ul>
  </>
}
