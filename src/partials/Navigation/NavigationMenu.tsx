import classNames from 'classnames';
import React, { useState } from 'react';
import useRouter from '../../hooks/useRouter';
import { Icons } from '../../icons';
import { Navigation } from '../../navigation.config';

export interface NavigationMenuProps {
  navigation: Navigation;
  icon?: React.ReactNode;
  title: React.ReactNode;

  selected?: boolean;
  subMenu?: boolean;
  children?: React.ReactNode;
}
export function NavigationMenu(props: NavigationMenuProps) {
  const { history } = useRouter()
  const [expanded, setExpanded] = useState(props.selected || false)

  return (
    <div>
      <div
        className={classNames(['NavigationMenu flex flex-row justify-between items-center cursor-pointer'], {
          'px-4 py-3': !props.subMenu,
          'pr-4 py-3 pl-8': props.subMenu,
          'selected': props.selected,
        })}
        onClick={() => {
          setExpanded((value) => !value)
          if (props.navigation.path) {
            history.push(props.navigation.path)
          }
        }}
      >
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
        <div className="flex flex-col overflow-hidden" style={{ height: expanded ? 'auto' : 0 }}>
          {props.children}
        </div>
      )}
    </div>

  );
}
