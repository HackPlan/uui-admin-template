import React from 'react';
import { useRouterBreadcrumb } from '../hooks/useRouterBreadcrumb';
import { routesForBreadcrumb } from '../route.config';
import { Breadcrumb } from '@hackplan/uui';

export interface AppBreadcrumbProps {
}

export function AppBreadcrumb(props: AppBreadcrumbProps) {
  const { items } = useRouterBreadcrumb(routesForBreadcrumb, { disableDefaults: true })
  return (
    <Breadcrumb className="mb-2" items={items} activeItem={''} />
  )
}

