import React, { Fragment, ReactElement, useContext } from 'react';
import { FootnotesContext } from '../contexts/footnotes';

export default function FootnoteList(): ReactElement {
  const { footnotes } = useContext(FootnotesContext);
  return footnotes.length > 0 ? (
    <article>
      <h2>Fotnoter</h2>
      <ol className={"footnotes"}>
        {footnotes.map((footnote, index) => <li key={`footnote-${index}`} id={`footnote-${index}`}>{footnote}</li>)}
      </ol>
    </article>
  ) : <Fragment/>
}
