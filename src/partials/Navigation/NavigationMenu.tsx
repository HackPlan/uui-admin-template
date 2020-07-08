import classNames from 'classnames';
import React from 'react';
import { Icons } from '../../icons';

export interface NavigationMenuProps {
  icon?: React.ReactNode;
  title: React.ReactNode;

  onClick?: () => void;

  selected?: boolean;
  expanded?: boolean;
  subMenu?: boolean;
  children?: React.ReactNode;
}
export function NavigationMenu(props: NavigationMenuProps) {
  return (
    <div>
      <div className={classNames(['NavigationMenu flex flex-row justify-between items-center cursor-pointer'], {
        'px-4 py-3': !props.subMenu,
        'pr-4 py-3 pl-8': props.subMenu,
        'selected': props.selected,
      })} onClick={props.onClick}>
        <div className="flex flex-row items-center">
          {props.icon && <div className="mr-2">{props.icon}</div>}
          <div>{props.title}</div>
        </div>
        {props.children && (
          <div>
            <Icons.Chevrondown />
          </div>
        )}
      </div>
      {props.children && (
        <div className="flex flex-col overflow-hidden" style={{ height: props.expanded ? 'auto' : 0 }}>
          {props.children}
        </div>
      )}
    </div>

  );
}
