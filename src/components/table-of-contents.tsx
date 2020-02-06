import React, { ReactNode } from 'react'
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
            {chapter.part && PartBit(chapter.part, chapter.partName!)}
            {chapter.chapter && ChapterBit(chapter.chapter)}
            {!chapter.part && chapter.title}
          </Link>
        </li>
      ))}
    </ol>
  )
}

function ChapterBit (chapter: number): ReactNode {
  return <>
    <span>{chapter}</span>:&nbsp;
  </>
}

function PartBit (part: string, partName: string): ReactNode {
  return <>
    <span>{part} - {partName}</span>
  </>
}
