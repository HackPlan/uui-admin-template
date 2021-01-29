import React from 'react';
import { PublicRoute, AuthenticatedRoute } from './routers/Routes';
import MainLayout from './layouts/MainLayout';
import FullPageLayout from './layouts/FullPageLayout';
import { Icons } from './icons';
import { RouterBreadcrumbRoutes } from './hooks/useRouterBreadcrumb';

const Login = React.lazy(() => import('./pages/Login'))
const Home = React.lazy(() => import('./pages/Home'))
const NotFound = React.lazy(() => import('./pages/error/NotFound'))
const Forbidden = React.lazy(() => import('./pages/error/Forbidden'));
const ServerError = React.lazy(() => import('./pages/error/ServerError'));
const TableBasic = React.lazy(() => import('./pages/table/TableBasic'));
const TableAdvanced = React.lazy(() => import('./pages/table/TableAdvanced'));
const FormBasic = React.lazy(() => import('./pages/form/FormBasic'));
const FormAutoGenerator = React.lazy(() => import('./pages/form/FormAutoGenerator'));

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
  // Form
  {
    key: 'FormBasic',
    path: '/form/basic',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <FormBasic />,
    breadcrumb: '基础表单',
  },
  {
    key: 'FormGenerator',
    path: '/form/generator',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <FormAutoGenerator />,
    breadcrumb: '自动生成表单',
  },
  // Table
  {
    key: 'TableBasic',
    path: '/table/basic',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <TableBasic />,
    breadcrumb: '基础表格',
  },
  {
    key: 'TableAdvanced',
    path: '/table/advanced',
    layout: MainLayout,
    route: AuthenticatedRoute,
    content: <TableAdvanced />,
    breadcrumb: '高级表格',
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
