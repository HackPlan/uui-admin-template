import React from 'react';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { PublicRoute, AuthenticatedRoute } from './routers/Routes';
import MainLayout from './layouts/MainLayout';
import FullPageLayout from './layouts/FullPageLayout';
import { FormBasic } from './pages/FormBasic';
import { Icons } from './icons';
import { RouterBreadcrumbRoutes } from './hooks/useRouterBreadcrumb';

export interface Route {
  key: string;
  path: string;
  route: typeof PublicRoute | typeof AuthenticatedRoute;
  layout: typeof MainLayout | typeof FullPageLayout;
  content: React.ReactNode;
  breadcrumb?: React.ComponentType | React.ElementType | string;
}

export const routes: Route[] = [
  /**
   * Public Routes
   */
  {
    key: 'login',
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
    key: 'home',
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
    key: 'formBasic',
    path: '/form/basic',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <FormBasic />,
    breadcrumb: '基础表单',
  },
]

export const routesForBreadcrumb: RouterBreadcrumbRoutes[] = routes.map((i) => {
  return {
    path: i.path,
    breadcrumb: i.breadcrumb,
  }
})
console.log({routesForBreadcrumb})