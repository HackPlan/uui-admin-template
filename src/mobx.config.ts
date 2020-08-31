import { observable } from 'mobx'
import { AuthStore } from './store/AuthStore'
import { AppStore } from './store/AppStore'
import { create } from 'mobx-persist';

export class Mobx {
  @observable public auth: AuthStore = new AuthStore()
  @observable public app: AppStore = new AppStore()

  private PersistPrefix = "UUIAdminTemplate"

  async initialMobxPersist() {
    const hydrate = create({
      jsonify: true,
    });
    await hydrate(`${this.PersistPrefix}:Auth`, this.auth);
  }
}

export const mobx = new Mobx()
