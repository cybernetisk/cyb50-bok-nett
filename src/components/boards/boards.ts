import { booleanString } from '../../types'

export interface BoardNode {
  id: string
  name: string
  part: booleanString
  title: string
  year: string
}

export interface BoardEdges {
  [id: number]: {
    node: BoardNode
  }
}

export interface Data {
  edges: BoardEdges
}

export class Boards {
  private map: Map<string, Board> = new Map()

  private constructor (private nodes: BoardNode[]) {
    nodes.forEach(node => this.addBoard(node))
  }

  private addBoard (node: BoardNode) {
    const key = node.year + node.part
    const board = this.getOrCreateBoard(key, node)
    board.addMember([node.title, node.name])
  }

  private getOrCreateBoard (key: string, node: BoardNode) {
    const board = this.map.get(key)
    if (board) return board
    const newBoard = new Board(node)
    this.map.set(key, newBoard)
    return newBoard
  }

  get list (): Array<Board> {
    return Array.from(this.map.values())
  }

  static fromData (data: Data): Boards {
    const nodes = Object.values(data.edges).map(edge => edge.node)
    return new Boards(nodes)
  }
}

class Board {
  private titles: Map<string, number> = new Map()

  public readonly year: number
  public readonly part: booleanString
  public readonly members: string[][] = []

  constructor (node: BoardNode) {
    this.year = parseInt(node.year, 10)
    this.part = node.part
  }

  addMember (member: string[]) {
    const titleIndex = this.titles.get(member[0])
    if (titleIndex !== undefined) {
      this.members[titleIndex][1] += `<br />${member[1]}`
      return
    }
    const length = this.members.push(member)
    this.titles.set(member[0], length - 1)
  }
}
