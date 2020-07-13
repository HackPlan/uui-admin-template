import React from 'react';
import { Icons } from "./icons"

export interface Navigation {
  key: string;
  label: React.ReactNode;
  path?: string;
  icon?: React.ReactNode;
  subs?: Navigation[];
  hiden?: boolean;
}

export const navigations: Navigation[] = [
  {
    key: 'home',
    label: '主页',
    icon: <Icons.Home />,
    path: '/',
  },
  {
    key: 'form',
    label: '表单页',
    icon: <Icons.Edit />,
    subs: [
      {
        key: 'formBasic',
        label: '基础表单',
        path: '/form/basic',
      },
    ]
  },
  {
    key: 'table',
    label: '表格页',
    icon: <Icons.List />,
    subs: [
      {
        key: 'tableBasic',
        label: '基础表格',
        path: '/table/basic',
      },
      {
        key: 'tableAdvanced',
        label: '高级表格',
        path: '/table/advanced',
      },
    ]
  },
  {
    key: 'error',
    label: '异常页',
    icon: <Icons.Alertcircle />,
    subs: [
      {
        key: 'errorForbidden',
        label: '403',
        path: '/error/403',
      },
      {
        key: 'errorNotFound',
        label: '403',
        path: '/error/404',
      },
      {
        key: 'errorServerError',
        label: '500',
        path: '/error/500',
      },
    ]
  },
]
