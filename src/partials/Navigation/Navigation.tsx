import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import useRouter from '../../hooks/useRouter';
import { navigations } from '../../navigation.config';
import { useRecoilState } from 'recoil';
import { store } from '../../store';
import { clone } from 'lodash';

export function Navigation() {
  const router = useRouter()

  const [navigationSettings, setNavigationSettings] = useRecoilState(store.NavigationSettings)

  return (
    <div>
      {navigations.map((i) => {
        return (
          <NavigationMenu
            selected={navigationSettings.selectedKey === i.key}
            expanded={!!navigationSettings.expanded[i.key]}
            key={i.key}
            title={i.label}
            icon={i.icon}
            onClick={() => {
              const newNavigationSettings = clone(navigationSettings)
              newNavigationSettings.expanded = {
                ...newNavigationSettings.expanded,
                [i.key]: !newNavigationSettings.expanded[i.key],
              }
              if (i.path) {
                newNavigationSettings.selectedKey = i.key
                router.history.push(i.path)
              }
              setNavigationSettings(newNavigationSettings)
            }}
          >
            {i.subs && i.subs.map((j) => {
              return (
                <NavigationMenu
                  subMenu
                  selected={navigationSettings.selectedKey === j.key}
                  key={j.key}
                  title={j.label}
                  icon={j.icon}
                  onClick={() => {
                    if (j.path) {
                      setNavigationSettings((value) => {
                        return {
                          selectedKey: j.key,
                          expanded: value.expanded,
                        }
                      })
                      router.history.push(j.path)
                    }
                  }}
                ></NavigationMenu>
              )
            })}
          </NavigationMenu>
        )
      })}
    </div>
  );
}
