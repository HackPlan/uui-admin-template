import React from 'react';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { PublicRoute, AuthenticatedRoute } from './routers/Routes';
import MainLayout from './layouts/MainLayout';
import FullPageLayout from './layouts/FullPageLayout';
import { FormBasic } from './pages/FormBasic';

export interface Route {
  key: string;
  path: string;
  route: typeof PublicRoute | typeof AuthenticatedRoute;
  layout: typeof MainLayout | typeof FullPageLayout;
  content: React.ReactNode;
}

export const routes: Route[] = [
  // Public
  {
    key: 'login',
    path: '/login',
    route: PublicRoute,
    layout: FullPageLayout,
    content: <Login />,
  },
  // Auth
  {
    key: 'home',
    path: '/',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <Home />,
  },
  {
    key: 'formBasic',
    path: '/form/basic',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <FormBasic />,
  },
]