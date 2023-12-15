import { action, makeObservable, observable } from 'mobx';
import { TFormSaleFilters } from '~/gateway.type';
import { formFactory } from '@form/formFactory';
import { productStr } from './ProductStore';
import { brandStr } from './BrandStore';

export class SalesReportStore {
  form = formFactory<TFormSaleFilters>({ category: '', product: '', brand: '' });

  items: TFormSaleFilters[] = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      form: observable,

      addToItems: action,
      setItems: action
    });
  }

  // region GETTERS & SETTERS

  addToItems = (item: TFormSaleFilters) => {
    this.items = [item, ...this.items];
  };
  setItems = (items: TFormSaleFilters[] = []) => {
    this.items = items;
  };

  // endregion

  // region METHODS

  // endregion

  // region EVENTS
  onChangeCategory = (value: string) => {
    this.form.brand.reset();
    this.form.product.reset();
    void productStr.loadItems(value);
  };
  onChangeProduct = (value: string) => {
    this.form.brand.reset();
    void brandStr.loadItems(value);
  };
  // endregion
}

export const salesReportStr = new SalesReportStore();
