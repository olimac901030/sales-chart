import { BaseListStore } from './BaseListStore';

export class BrandStore extends BaseListStore {
  constructor() {
    super();
  }

  // region GETTERS & SETTERS

  // endregion

  // region METHODS

  loadItems = async () => {
    // const { ok, data } = await categorySvc.getAll();
    // if (ok) this.setItems(data);
  };
  // endregion

  // region EVENTS

  // endregion
}

export const brandStr = new BrandStore();
