import { atom } from 'recoil';
import { UserAuth } from '../types/User';

const Auth = atom<UserAuth | null>({
  key: 'Auth',
  default: null,
})

const NavigationSettings = atom<{
  selectedKey: string | null;
  expanded: {
    [key: string]: boolean;
  };
}>({
  key: 'NavigationSettings',
  default: {
    selectedKey: 'home',
    expanded: {},
  }
})

export const store = {
  Auth,
  NavigationSettings,
}
