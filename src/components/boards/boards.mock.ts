import { BoardNode } from './boards'

export const nodes: BoardNode[] = [
  generateNode(1, false, 'foo', 'test 1'),
  generateNode(1, false, 'bar', 'test 2'),
  generateNode(1, true, 'baz', 'test 3'),
  generateNode(2, false, 'bam', 'test 4'),
  generateNode(2, true, 'ban', 'test 5'),
  generateNode(2, true, 'bao', 'test 5')
]

function generateNode (year: number, part: boolean, name: string, title: string): BoardNode {
  return {
    id: '',
    name,
    part: part ? '1' : '0',
    title,
    year: year.toString()
  }
}
