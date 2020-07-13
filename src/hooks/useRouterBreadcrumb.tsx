
import useBreadcrumbs, { BreadcrumbsRoute, Options as BreadcrumbsOptions } from 'use-react-router-breadcrumbs';
import { BreadcrumbItem as UUIBreadcrumbItem } from '@hackplan/uui';
import { useMemo } from 'react';
import useRouter from './useRouter';

export type RouterBreadcrumbRoutes = BreadcrumbsRoute
export type RouterBreadcrumbOptions = BreadcrumbsOptions
export function useRouterBreadcrumb(routes?: RouterBreadcrumbRoutes[], options?: BreadcrumbsOptions): {
  items: UUIBreadcrumbItem[];
} {
  const router = useRouter()
  const breadcrumbs = useBreadcrumbs(routes, options)
  const items = useMemo<UUIBreadcrumbItem[]>(() => {
    return breadcrumbs.map((i) => {
      return {
        key: i.key,
        active: router.match.url === i.match.url,
        label: i.breadcrumb,
        onAction: () => {
          router.history.replace(i.match.url)
        },
      }
    })
  }, [breadcrumbs, router])

  return {
    items
  }
}