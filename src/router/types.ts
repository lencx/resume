import { ComponentType, LazyExoticComponent, ReactNode } from 'react';

type envStatus = 'dev' | 'build';

export interface RouteOption {
  title?: string,
  // basic prop
  path: string;
  // basic prop
  exact?: boolean;
  // preloader for lazy loading
  fallback?: NonNullable<ReactNode> | null;
  // lazy loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // sub routes
  routes?: RouteOption[];
  // redirect path
  redirect?: string;
}