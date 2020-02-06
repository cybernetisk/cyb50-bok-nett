import { Edge } from './chapters'

export const edges: Edge[] = [
  generateItem('3', 'baz/index.mdx', '/bam', '/bar', null),
  generateItem('4', 'bam.mdx', '/ban', '/baz', 'II'),
  generateItem('2', 'bar.mdx', '/baz', '/foo', 'I'),
  generateItem('5', 'ban.mdx', null, '/bam', null),
  generateItem('1', 'foo.mdx', '/bar', null, null)
]

function generateItem(title: string, relativePath: string, next: string | null, previous: string | null, part: string | null) {
  return {
    body: '',
    frontmatter: {
      chapter: null,
      title,
      next,
      part,
      partName: null,
      previous
    },
    parent: {
      relativePath
    }
  }
}
