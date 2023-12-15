import { action, makeObservable, observable } from 'mobx';
import { TFormSaleFilters } from '~/gateway.type';
import { formFactory } from '@form/formFactory';
import { productStr } from './ProductStore';

export class SalesReportStore {
  form = formFactory<TFormSaleFilters>({ category: '', product: '', brand: '' });

  items: TFormSaleFilters[] = [];

  constructor() {
    this.setValidators();
    void this.loadGateways();
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
  setValidators = () => {
    // const { serial, ip, name } = this.form;
    // serial.withValidator(vRequired);
    // name.withValidator(vRequired);
    // ip.withValidator(vRequired, vIsIpV4);
  };

  loadGateways = async () => {
    // const { ok, data } = await gatewaySvc.getAll();
    // if (ok) this.setItems(data);
  };
  // endregion

  // region EVENTS
  onChangeCategory = (value: string) => {
    this.form.brand.reset();
    this.form.product.reset();
    void productStr.loadItems(value);
  };
  // endregion
}

export const salesReportStr = new SalesReportStore();
