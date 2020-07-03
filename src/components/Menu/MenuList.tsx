import React from 'react';
import { Menu } from './Menu';
import { Icons } from '../../icons';
import useRouter from '../../hooks/useRouter';

export function MenuList() {
  const router = useRouter()

  return (
    <div>
      <Menu
        title={'主页'} icon={<Icons.Home />}
        onClick={() => {
          router.history.push('/')
        }}
      >
      </Menu>
      <Menu
        title={'表单页'} icon={<Icons.Edit />}
        onClick={() => {
          router.history.push('/form')
        }}
      >
        <Menu subMenu title={'基础表单'}></Menu>
        <Menu subMenu title={'分步表单'}></Menu>
      </Menu>
    </div>
  );
}
