import { BaseListStore } from './BaseListStore';
import { categorySvc } from '../services/category.service';

export class CategoryStore extends BaseListStore {
  constructor() {
    super();
    void this.loadItems();
  }

  // region GETTERS & SETTERS

  // endregion

  // region METHODS

  fillData = async () => {
    const { ok, data } = await categorySvc.getAll();
    if (ok) this.setItems(data);
  };
  // endregion

  // region EVENTS

  // endregion
}

export const categoryStr = new CategoryStore();
