import { createContext, ReactNode } from 'react';

type AddFootnote = (footnote: ReactNode, footnotes: Array<ReactNode>) => number

interface Context {
  footnotes: Array<ReactNode>;
  addFootnote: AddFootnote
}

export const addFootnote: AddFootnote = (footnote, footnotes) => {
  return footnotes.push(footnote);
}

export const FootnotesContext = createContext<Context>({
  footnotes: [],
  addFootnote
});

export const FootnotesProvider = FootnotesContext.Provider;
