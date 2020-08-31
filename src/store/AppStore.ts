import { observable } from 'mobx';

export type NavigationSettings = {
  selectedKey: string | null;
  expanded: {
    [key: string]: boolean;
  };
}

export class AppStore {

  @observable expandedNavigations: Set<string> = new Set<string>()

}
