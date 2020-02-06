export interface Edge {
  body: string
  frontmatter: {
    chapter: number | null
    next: string | null
    part: string | null
    partName: string | null
    previous: string | null
    title: string
  }
  parent: {
    relativePath: string
  }
}

export class Chapters {
  private root: Chapter | null = null

  private constructor (edges: Edge[]) {
    edges.forEach(edge => this.add(edge))
  }

  private add (edge: Edge): void {
    const chapter = new Chapter(edge)
    if (!this.root) {
      this.root = chapter
      return
    }
    if (!edge.frontmatter.previous || edge.frontmatter.next && edge.frontmatter.next === this.root.path) {
      const oldRoot = this.root
      this.root = chapter
      this.root.next = oldRoot
      return
    }
    this.root.next = chapter
  }

  get list (): Chapter[] {
    if (!this.root) return []
    let chapters = []
    let level = 1
    let current: Chapter | null = this.root
    while (current) {
      if (current.part) {
        level = 1
      }
      current.level = level
      chapters.push(current)
      if (current.part) {
        level = 2
      }
      current = current.next
    }
    return chapters
  }

  static fromEdges (edges: Edge[]): Chapters {
    return new Chapters(edges)
  }
}

export class Chapter {
  private _next?: Chapter

  public chapter: number | null
  public part: string | null
  public partName: string | null
  public path: string
  public pathNext: string | null
  public pathPrevious: string | null
  public title: string
  public level: number = 0

  constructor (edge: Edge) {
    this.chapter = edge.frontmatter.chapter
    this.part = edge.frontmatter.part
    this.partName = edge.frontmatter.partName
    this.path = '/' + edge.parent.relativePath.replace(/\/index\.mdx$/, '').replace(/\.mdx$/, '')
    this.pathNext = edge.frontmatter.next
    this.pathPrevious = edge.frontmatter.previous
    this.title = edge.frontmatter.title
  }

  get next () {
    return this._next || null
  }

  set next (next: Chapter | null) {
    if (!next) return
    if (this._next && this._next.path === next.pathNext) {
      const oldNext = this._next
      this._next = next
      this._next.next = oldNext
      return
    }
    if (this._next) {
      this._next.next = next
      return
    }
    this._next = next
  }
}
