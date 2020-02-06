import { ReactNode } from 'react'

export interface PageProps {
  data?: any;
  path: string;
  navigate: Function;
  location: Location;
  pageResources: {
    component: Function;
    json: {
      pageContext: {
        isCreatedByStatefulCreatePages: boolean;
      };
    };
    page: {
      componentChunkName: string;
      path: string;
      webpackCompilationHash: string;
      matchPath: unknown;
    };
  };
  uri: string;
  children?: ReactNode;
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
    frontmatter?: {
      title?: string;
      author?: string;
      next?: string;
      previous?: string;
    }
  };
  pathContext: {
    isCreatedByStatefulCreatePages: boolean;
  };
}
