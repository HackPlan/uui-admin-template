import React from 'react';
import { Persona } from '../../components/Persona';
import { ToolBarItem } from './ToolBarItem';
import { useStore } from '../../hooks/useStore';

export interface ToolBarProps {
}

export function ToolBar() {
  const { auth } = useStore()

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
              auth.logout()
              return true
            }
          }]}
        />
      )}
    </div>
  )
}

