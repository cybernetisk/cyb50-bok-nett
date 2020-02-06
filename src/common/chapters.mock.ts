import { Edge } from './chapters'

export const edges: Edge[] = [
  generateItem('3', 'baz/index.mdx', null, 100),
  generateItem('4', 'bam.mdx', 'II', 150),
  generateItem('2', 'bar.mdx', 'I', 3),
  generateItem('5', 'ban.mdx', null, 1000),
  generateItem('1', 'foo.mdx', null, 0)
]

function generateItem (title: string, relativePath: string, part: string | null, order: number) {
  return {
    body: '',
    frontmatter: {
      chapter: null,
      title,
      next: null,
      order,
      part,
      partName: null,
      previous: null
    },
    parent: {
      relativePath
    }
  }
}
