import React from 'react';
import { useRouterBreadcrumb } from '../hooks/useRouterBreadcrumb';
import { routesForBreadcrumb, routes } from '../route.config';
import { Breadcrumb } from '@hackplan/uui';
import useRouter from '../hooks/useRouter';

export interface AppBreadcrumbProps {
}

export function AppBreadcrumb(props: AppBreadcrumbProps) {
  const router = useRouter()
  const { items } = useRouterBreadcrumb(routesForBreadcrumb, { disableDefaults: true })
  const activeRoute = routes && routes.find((i) => i.path === router.match.path)

  if (activeRoute && activeRoute.hideBreadcrumb) return null
  return (
    <Breadcrumb className="mb-2" items={items} />
  )
}

