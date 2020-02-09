export interface Edge {
  body: string
  frontmatter: {
    chapter: number | null
    next: string | null
    order: number
    part: string | null
    partName: string | null
    previous: string | null
    short: string | null
    title: string
  }
  parent: {
    relativePath: string
  }
}

export class Chapters {
  private map: {[order: number]: Chapter} = {}

  private constructor (edges: Edge[]) {
    edges.forEach(edge => {
      this.map[edge.frontmatter.order] = new Chapter(edge)
    })
  }

  get list (): Chapter[] {
    const list = Object.values(this.map)
    return list.map((chapter, index) => chapter.copy(list[index - 1], list[index + 1]))
  }

  static fromEdges (edges: Edge[]): Chapters {
    return new Chapters(edges)
  }
}

export class Chapter {
  public chapter: number | null
  public part: string | null
  public partName: string | null
  public path: string
  public pathNext: string | null
  public pathPrevious: string | null
  public short: string | null
  public title: string

  constructor (private edge: Edge, private previous: Chapter | null = null, private next: Chapter | null = null) {
    this.chapter = edge.frontmatter.chapter
    this.part = edge.frontmatter.part
    this.partName = edge.frontmatter.partName
    this.path = '/' + edge.parent.relativePath.replace(/\/index\.mdx$/, '').replace(/\.mdx$/, '')
    this.pathNext = edge.frontmatter.next
    this.pathPrevious = edge.frontmatter.previous
    this.short = edge.frontmatter.short
    this.title = edge.frontmatter.title
  }

  copy(previous: Chapter | null, next: Chapter | null): Chapter {
    return new Chapter(this.edge, previous, next)
  }

  get level (): number {
    if (!this.previous && !this.next) return 0
    if (!this.previous || this.partName) return 1
    return 2
  }
}
