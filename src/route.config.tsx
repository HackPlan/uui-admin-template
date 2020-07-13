import React from 'react';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { PublicRoute, AuthenticatedRoute } from './routers/Routes';
import MainLayout from './layouts/MainLayout';
import FullPageLayout from './layouts/FullPageLayout';
import { FormBasic } from './pages/FormBasic';
import { Icons } from './icons';
import { RouterBreadcrumbRoutes } from './hooks/useRouterBreadcrumb';
import { NotFound } from './pages/NotFound';
import { Forbidden } from './pages/Forbidden';
import { ServerError } from './pages/ServerError';

export interface Route {
  key: string;
  path: string;
  route: typeof PublicRoute | typeof AuthenticatedRoute;
  layout: typeof MainLayout | typeof FullPageLayout;
  content: React.ReactNode;
  breadcrumb?: React.ComponentType | React.ElementType | string;
  hideBreadcrumb?: boolean;
}

export const routes: Route[] = [
  /**
   * Public Routes
   */
  {
    key: 'Login',
    path: '/login',
    route: PublicRoute,
    layout: FullPageLayout,
    content: <Login />,
    breadcrumb: '登录页',
  },
  /**
   * Private Authenticated Routes
   */
  {
    key: 'Home',
    path: '/',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <Home />,
    breadcrumb: () => (
      <div className="flex flex-row items-center">
        <Icons.Home />
        <div className="ml-1">主页</div>
      </div>
    ),
  },
  {
    key: 'FormBasic',
    path: '/form/basic',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <FormBasic />,
    breadcrumb: '基础表单',
  },
  {
    key: 'Forbidden',
    path: '/error/403',
    layout: MainLayout,
    route: PublicRoute,
    content: <Forbidden />,
    breadcrumb: '403',
    hideBreadcrumb: true,
  },
  {
    key: 'NotFound',
    path: '/error/404',
    layout: MainLayout,
    route: PublicRoute,
    content: <NotFound />,
    breadcrumb: '404',
    hideBreadcrumb: true,
  },
  {
    key: 'ServerError',
    path: '/error/500',
    layout: MainLayout,
    route: PublicRoute,
    content: <ServerError />,
    breadcrumb: '500',
    hideBreadcrumb: true,
  },
  /**
   * Default Route
   */
  {
    key: 'PageNotFound',
    path: '/404',
    layout: MainLayout,
    route: PublicRoute,
    content: <NotFound />,
    breadcrumb: '404',
    hideBreadcrumb: true,
  },
]

export const routesForBreadcrumb: RouterBreadcrumbRoutes[] = routes.map((i) => {
  return {
    path: i.path,
    breadcrumb: i.breadcrumb,
    hideBreadcrumb: i.hideBreadcrumb,
  }
})
