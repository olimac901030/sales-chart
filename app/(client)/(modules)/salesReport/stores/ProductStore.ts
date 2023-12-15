import { BaseListStore } from './BaseListStore';
import { categorySvc } from '../services/category.service';

export class ProductStore extends BaseListStore {
  constructor() {
    super();
  }

  // region GETTERS & SETTERS

  // endregion

  // region METHODS

  loadItems = async (categoryId?: string) => {
    if (!categoryId) this.setItems([]);
    console.log(categoryId);
    const { ok, data } = await categorySvc.getCategoryProducts(categoryId);
    console.log({ ok, data });
    if (ok) this.setItems(data);
  };
  // endregion

  // region EVENTS

  // endregion
}

export const productStr = new ProductStore();
