import React from 'react';
import { Icons } from "./icons"

export interface Navigation {
  key: string;
  label: React.ReactNode;
  path?: string;
  icon?: React.ReactNode;
  subs?: Navigation[];
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
      {
        key: 'formAdvanced',
        label: '分步表单',
        path: '/form/advanced',
      }
    ]
  },
  {
    key: 'list',
    label: '列表页',
    icon: <Icons.List />,
    subs: [
      {
        key: 'listBasic',
        label: '基础列表',
        path: '/list/basic',
      },
      {
        key: 'listAdvanced',
        label: '高级列表',
        path: '/list/advanced',
      }
    ]
  },
]
