import { action, computed, makeObservable, observable } from 'mobx';
import { OptionType } from '@/option.type';
import { ICategories } from '~/categories.type';

export class BaseListStore {
  items: ICategories[] = [];

  constructor() {
    makeObservable(this, {
      items: observable,

      setItems: action,

      getOptions: computed
    });
  }

  // region GETTERS & SETTERS

  setItems = (items: ICategories[] = []) => {
    this.items = items;
  };

  get getOptions(): OptionType[] {
    return this.items.map(({ name: label, _id: value }) => ({ label, value }));
  }

  // endregion

  // region METHODS

  loadItems = async (): Promise<ICategories[] | void> => {
    return Promise.resolve([]);
  };
  // endregion

  // region EVENTS
  onReset = () => {
    this.setItems();
  };
  // endregion
}
