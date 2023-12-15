import { BaseListStore } from './BaseListStore';
import { productSvc } from '../services/product.service';

export class BrandStore extends BaseListStore {
  constructor() {
    super();
  }

  // region GETTERS & SETTERS

  // endregion

  // region METHODS

  fillData = async (productId?: string) => {
    if (!productId) this.setItems([]);
    const { ok, data } = await productSvc.getProductBrands(productId);
    console.log({ ok, data });
    if (ok) this.setItems(data);
  };
  // endregion

  // region EVENTS

  // endregion
}

export const brandStr = new BrandStore();
