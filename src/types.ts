import { ReactNode } from "react";

export interface PageProps {
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
    }
  };
  pathContext: {
    isCreatedByStatefulCreatePages: boolean;
  };
}
