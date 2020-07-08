import { atom, selector } from 'recoil';
import { UserAuth } from '../types/User';

const Auth = atom<UserAuth | null>({
  key: 'Auth',
  default: null,
})
const isLogin = selector<boolean>({
  key: 'isLogin',
  get: ({ get }) => {
    const auth = get(Auth)
    return !!auth && !!auth.user && !!auth.token
  }
})

export const store = {
  Auth, isLogin,
}
