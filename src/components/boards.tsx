import React from 'react'
import { Boards, Data } from './boards/boards'
import DefinitionList from './definition-list'

interface Props {
  data: Data
}

export default function BoardsComponent ({ data }: Props) {
  const boards = Boards.fromData(data)
  return <section className="boards">
    {boards.list.map(board => <article key={board.year + board.part}>
      <h3>{board.part === '0' ? 'Våren' : 'Høsten'} {board.year}</h3>
      <DefinitionList data={board.members} variant="compact"/>
    </article>)}
  </section>
}
