import { action, computed, makeObservable, observable } from 'mobx';
import { OptionType } from '@/option.type';
import { IBase } from '~/base.type';

export class BaseListStore {
  items: IBase[] = [];

  constructor() {
    makeObservable(this, {
      items: observable,

      setItems: action,

      getOptions: computed,
      hasItems: computed
    });
  }

  // region GETTERS & SETTERS

  setItems = (items: IBase[] = []) => {
    this.items = items;
  };

  get getOptions(): OptionType[] {
    return this.items.map(({ name: label, id: value }) => ({ label, value }));
  }

  get hasItems(): boolean {
    console.log(this.items.length);
    return !!this.items.length;
  }

  // endregion

  // region METHODS

  loadItems = async (): Promise<IBase[] | void> => {
    return Promise.resolve([]);
  };
  // endregion

  // region EVENTS
  onReset = () => {
    this.setItems();
  };
  // endregion
}
