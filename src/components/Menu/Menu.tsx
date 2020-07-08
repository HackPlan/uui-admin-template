import React, { useState } from 'react';
import { Icons } from '../../icons';
import classNames from 'classnames';

export interface MenuProps {
  icon?: React.ReactNode;
  title: string;

  onClick?: () => void;

  subMenu?: boolean;
  children?: React.ReactNode;
}
export function Menu(props: MenuProps) {

  return (
    <div>
      <div className={classNames(['flex flex-row justify-between items-center cursor-pointer'], {
        'm-4': !props.subMenu,
        'mx-2 mb-2': props.subMenu,
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
        <div className="flex flex-col ml-4">
          {props.children}
        </div>
      )}
    </div>

  );
}

export interface SubMenuProps {
  children?: React.ReactNode;
}
export function SubMenu(props: SubMenuProps) {
  return (
    <div></div>
  )
}