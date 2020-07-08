import React from 'react';
import { useRecoilState } from 'recoil';
import { Persona } from '../../components/Persona';
import { store } from '../../store';
import { ToolBarItem } from './ToolBarItem';

export interface ToolBarProps {
}

export function ToolBar(props: ToolBarProps) {


  const [auth, setAuth] = useRecoilState(store.Auth)

  return (
    <div className="h-full box-border px-4 flex flex-row items-center justify-between">
      <div></div>
      {auth && auth.user && (
        <ToolBarItem
          content={
            <div className="h-full flex justify-center items-center cursor-pointer">
              <Persona user={auth.user} />
            </div>
          }
          menus={[{
            label: '退出登录',
            onAction: () => {
              setAuth(null)
              return true
            }
          }]}
        />
      )}
    </div>
  )
}

