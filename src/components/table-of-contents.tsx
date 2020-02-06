import React from 'react'
import { Chapter } from '../common/chapters'
import { Link } from 'gatsby'

interface Props {
  chapters: Chapter[]
}

export default function TableOfContents ({ chapters }: Props) {
  return (
    <ol>
      {chapters.map(chapter => (
        <li key={chapter.path}>
          <Link to={chapter.path}>
            {chapter.title}
          </Link>
        </li>
      ))}
    </ol>
  )
}
