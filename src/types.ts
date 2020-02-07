import { ReactNode } from 'react'

export interface PageProps<T> {
  data: T
  path: string
  navigate: Function
  location: Location
  pageResources: {
    component: Function
    json: {
      pageContext: {
        isCreatedByStatefulCreatePages: boolean
      }
    }
    page: {
      componentChunkName: string
      path: string
      webpackCompilationHash: string
      matchPath: unknown
    }
  }
  uri: string
  children?: ReactNode
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    frontmatter?: {
      author?: string
      chapter?: number
      next?: string
      part?: string
      partName?: string
      previous?: string
      title?: string
    }
  }
  pathContext: {
    isCreatedByStatefulCreatePages: boolean
  }
}
