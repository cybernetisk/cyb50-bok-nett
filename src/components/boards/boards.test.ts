/* eslint-env jest */

import { BoardEdges, Boards, Data } from './boards'
import { nodes } from './boards.mock'

describe('Boards', () => {
  let boards: Boards
  const data: Data = {
    edges: nodes.reduce((memo: BoardEdges, node, index) => {
      memo[index] = { node }
      return memo
    }, {})
  }

  beforeEach(() => {
    boards = Boards.fromData(data)
  })

  it('should list in correct order', () => {
    expect(boards.list.map(board => board.year + board.part)).toEqual(['10', '11', '20', '21'])
  })

  it('populates members correctly', () => {
    const list = boards.list
    expect(list[0].members).toEqual([['test 1', 'foo'], ['test 2', 'bar']])
    expect(list[1].members).toEqual([['test 3', 'baz']])
    expect(list[2].members).toEqual([['test 4', 'bam']])
    expect(list[3].members).toEqual([['test 5', 'ban<br />bao']])
  })
})
