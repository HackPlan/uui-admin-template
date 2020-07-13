import React, { useEffect } from 'react';
import { NavigationMenu } from './NavigationMenu';
import useRouter from '../../hooks/useRouter';
import { navigations } from '../../navigation.config';
import { useRecoilState } from 'recoil';
import { store } from '../../store';
import { clone } from 'lodash';

export function Navigation() {
  const router = useRouter()

  const [navigationSettings, setNavigationSettings] = useRecoilState(store.NavigationSettings)
  useEffect(() => {
    const navigation = navigations.find((i) => {
      return i.path === router.match.path ||
        (i.subs && i.subs.some((j) => router.match.path === j.path))
    })
    if (navigation) {
      const newNavigationSettings = clone(navigationSettings)
      newNavigationSettings.expanded = {
        ...newNavigationSettings.expanded,
        [navigation.key]: true,
      }
      setNavigationSettings(newNavigationSettings)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {navigations.map((i) => {
        return (
          <NavigationMenu
            selected={router.match.path === i.path}
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
                  selected={router.match.path === j.path}
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
