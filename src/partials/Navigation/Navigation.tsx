import React from 'react';
import useRouter from '../../hooks/useRouter';
import { navigations } from '../../navigation.config';
import { NavigationMenu } from './NavigationMenu';

export function Navigation() {
  const router = useRouter()

  return (
    <div>
      {navigations.map((i) => {
        return (
          <NavigationMenu
            navigation={i}
            selected={router.match.path === i.path}
            key={i.key}
            title={i.label}
            icon={i.icon}
          >
            {i.subs && i.subs.map((j) => {
              return (
                <NavigationMenu
                  navigation={j}
                  subMenu
                  selected={router.match.path === j.path}
                  key={j.key}
                  title={j.label}
                  icon={j.icon}
                ></NavigationMenu>
              )
            })}
          </NavigationMenu>
        )
      })}
    </div>
  );
}
