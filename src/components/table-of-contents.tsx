import React, { ReactNode } from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import { Chapters, Edge } from "./chapters/chapters";

export interface TableOfContentsData {
  edges: {
    [key: string]: {
      node: Edge
    }
  };
}

interface Props {
  data: TableOfContentsData;
  className?: string;
}

export default function TableOfContents({ data, className }: Props) {
  const chapters = Chapters.fromEdges(Object.values(data.edges).map(edge => edge.node));
  return <section className={clsx(className)}>
    <h2>Innholdsfortegnelse</h2>
    <ol className="toc">
      {chapters.list.map(chapter => (
        <li key={chapter.path} className={`toc__item toc__item--level-${chapter.level}`}>
          <Link to={chapter.path} className={`toc__link toc__link--level-${chapter.level}`}>
            <span
              className="toc__link-text"
              dangerouslySetInnerHTML={({ __html: chapter.partName || chapter.short || chapter.title })} />
            <span className="toc__link-meta" aria-hidden={true}>
              {chapter.part && PartBit(chapter.part)}
              {chapter.chapter && ChapterBit(chapter.chapter)}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  </section>;
}

function ChapterBit(chapter: number): ReactNode {
  return <>Kap {chapter}</>;
}

function PartBit(part: string): ReactNode {
  return <>Del {part}</>;
}
