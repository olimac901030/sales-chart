import { action, computed, makeObservable, observable } from 'mobx';
import { OptionType } from '@/option.type';
import { IBase } from '~/base.type';

export class BaseListStore {
  items: IBase[] = [];
  loading = false;

  constructor() {
    makeObservable(this, {
      items: observable,
      loading: observable,

      setItems: action,
      setLoading: action,

      getOptions: computed,
      hasItems: computed
    });
  }

  // region GETTERS & SETTERS

  setItems = (items: IBase[] = []) => {
    this.items = items;
  };
  setLoading = (value = false) => {
    this.loading = value;
  };

  get getOptions(): OptionType[] {
    return this.items.map(({ name: label, id: value }) => ({ label, value }));
  }

  get hasItems(): boolean {
    return !!this.items.length;
  }

  // endregion

  // region METHODS

  loadItems = async (value?: string): Promise<IBase[] | void> => {
    try {
      this.setLoading(true);
      await this.fillData(value);
    } catch (e) {
      console.log(e);
      this.setItems();
    } finally {
      this.setLoading();
    }
  };
  protected fillData = async (value?: string): Promise<IBase[] | void> => {
    return value ? Promise.resolve([]) : [];
  };

  // endregion

  // region EVENTS
  onReset = () => {
    this.setItems();
  };
  // endregion
}
