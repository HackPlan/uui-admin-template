import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';
import type { UserAuth, UserAuthUser } from '../types/Auth';

export class AuthStore {

  @persist('object') @observable user: UserAuthUser | null = null
  @persist('object') @observable token: string | null = null

  get isLogin() {
    return this.token !== null && this.user !== null
  }


  @action('login')
  login = (userAuth: UserAuth) => {
    this.user = userAuth.user
    this.token = userAuth.token
  }

  @action('logout')
  logout = () => {
    this.user = null
    this.token = null
  }
}
