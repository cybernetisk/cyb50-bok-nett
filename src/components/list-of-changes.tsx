import React from 'react'
import clsx from 'clsx'

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
  className?: string
}

export default function ListOfChanges ({ changes, className }: Props) {
  return <section className={clsx('loc', className)}>
    <h2>Endringslogg</h2>
    <ul className="changes">
      {changes.map(change => (
        <li key={change.id} className="changes__item">
          <strong>{change.frontmatter.date} - {change.frontmatter.title}</strong>
          <div dangerouslySetInnerHTML={({ __html: change.html })}></div>
        </li>
      ))}
    </ul>
  </section>
}
