import React, { ReactElement, ReactNode, useContext } from 'react';
import { FootnotesContext } from '../contexts/footnotes';

interface Props {
  children: ReactNode
}

export default function Footnote({ children }: Props): ReactElement {
  const { addFootnote, footnotes } = useContext(FootnotesContext);
  const oldIndex = footnotes.indexOf(children);
  const newIndex = oldIndex === -1 ? addFootnote(children, footnotes) - 1 : oldIndex;
  return <sup className={"footnote-backref"}>
    <a href={`#footnote-${newIndex}`}>{newIndex + 1}</a>
  </sup>;
}
