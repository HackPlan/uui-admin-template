import React, { useState } from 'react';
import { Popover } from '@hackplan/uui';

export interface ToolBarItemProps {
  content: React.ReactNode;
  menus: {
    label: React.ReactNode;
    onAction?: () => boolean;
  }[];
}

export function ToolBarItem(props: ToolBarItemProps) {
  const [active, setActive] = useState(false)
  return (
    <Popover
      active={active}
      activator={
        <div className="h-full flex" onClick={() => setActive((value) => !value)}>
          {props.content}
        </div>
      }
      onClickAway={() => setActive(false)}
      customize={{
        Root: { extendClassName: 'h-full' },
        Activator: { extendClassName: 'h-full' },
        Content: { extendClassName: 'shadow-sm border border-gray-200' },
      }}
    >
      {props.menus.map((menu, index) => {
        return (
          <div
            key={index}
            className="p-4 cursor-pointer hover:bg-gray-100 active:bg-gray-200"
            onClick={() => {
              const shouldCloseMenu = menu.onAction ? menu.onAction() : true
              if (shouldCloseMenu) setActive(false)
            }}
          >{menu.label}</div>
        )
      })}
    </Popover>
  )
}

