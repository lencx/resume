import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  {
    title: 'Resume',
    path: '/:resume',
    component: lazy(() => import('./views/resume')),
    exact: true,
  },
  {
    title: 'Home',
    path: '/',
    component: lazy(() => import('./views/home')),
    exact: true,
  },
];

export default routes;