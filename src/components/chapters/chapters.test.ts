/* eslint-env jest */

import { Chapters } from './chapters'
import { edges } from './chapters.mock'

describe('Chapters', () => {
  let chapters: Chapters

  beforeEach(() => {
    chapters = Chapters.fromEdges(edges)
  })

  it('should get correct order', () =>{
    expect(chapters.list.map(chapter => chapter.title)).toEqual(['1', '2', '3', '4', '5'])
  })

  it('should set levels', () =>{
    expect(chapters.list.map(chapter => chapter.level)).toEqual([1, 1, 2, 1, 2])
  })
})
