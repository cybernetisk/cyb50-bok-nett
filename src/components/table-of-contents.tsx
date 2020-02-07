import React, { ReactNode } from 'react'
import { Chapter } from '../common/chapters'
import { Link } from 'gatsby'

interface Props {
  chapters: Chapter[]
}

export default function TableOfContents ({ chapters }: Props) {
  return <>
    <h2>Innholdsfortegnelse</h2>
    <ol className="toc">
      {chapters.map(chapter => (
        <li key={chapter.path} className={`toc__item toc__item--level-${chapter.level}`}>
          <Link to={chapter.path} className={`toc__link toc__link--level-${chapter.level}`}>
            <span className="toc__link-text">{chapter.partName || chapter.short || chapter.title}</span>
            <span className="toc__link-meta">
              {chapter.part && PartBit(chapter.part)}
              {chapter.chapter && ChapterBit(chapter.chapter)}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  </>
}

function ChapterBit (chapter: number): ReactNode {
  return <>Kap {chapter}</>
}

function PartBit (part: string): ReactNode {
  return <>Del {part}</>
}
