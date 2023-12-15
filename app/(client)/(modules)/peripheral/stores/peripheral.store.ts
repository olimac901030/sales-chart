import { action, makeObservable, observable } from 'mobx';
import { IPeripheral } from '~/peripheral.type';
import { ModalStatus } from '~/modal.type';
import { DialogStore } from '@component/layouts/Dialog/store/dialog.store';
import { formFactory } from '@form/formFactory';
import { vRequired } from '@validator/requiered';
import { PeripheralStatus } from '~/peripheralStatus.type';
import { vNumeric } from '@validator/numeric';
import { peripheralSvc } from '#peripheral/services/peripheral.service';

export class PeripheralStore extends DialogStore {
  #gateway = '';
  editing = -1;
  form = formFactory<IPeripheral>({
    _id: '',
    createdAt: undefined,
    status: PeripheralStatus.ONLINE,
    uid: 0,
    vendor: '',
    gateway: ''
  });

  items: IPeripheral[] = [];

  constructor() {
    super();
    this.setValidators();
    makeObservable(this, {
      items: observable,
      form: observable,
      addToItems: action,
      setItems: action,
      updateItem: action
    });
  }

  // region GETTERS & SETTERS

  setGateway = (gatewayId: string) => {
    this.#gateway = gatewayId;
  };

  addToItems = (item: IPeripheral) => {
    this.items = [...this.items, item];
  };
  setItems = (items: IPeripheral[] = []) => {
    this.items = items;
  };
  updateItem = (item: IPeripheral) => {
    this.items[this.editing] = item;
    this.editing = -1;
    this.setModal();
  };

  get disableAdding(): boolean {
    return this.items.length >= 10;
  }

  // endregion

  // region METHODS
  setValidators = () => {
    const { uid, vendor } = this.form;
    uid.withValidator(vRequired, vNumeric);
    vendor.withValidator(vRequired);
  };

  loadPeripherals = async () => {
    if (!this.#gateway) return;
    const { ok, data } = await peripheralSvc.getAll(this.#gateway);
    if (ok) this.setItems(data);
  };

  reset = () => {
    this.#gateway = '';
    this.setItems();
    this.form.$.reset();
  };

  // endregion

  // region EVENTS

  onEditPeripheral = (peripheral: IPeripheral, index: number) => {
    this.form.$.onChange({ ...peripheral });
    this.setModal(ModalStatus.EDIT);
    this.editing = index;
  };

  onDeletePeripheral = async (peripheral: IPeripheral) => {
    const { ok } = await peripheralSvc.remove(peripheral._id);
    if (ok) await this.loadPeripherals();
  };

  onClickAddPeripheral = () => {
    this.form.$.reset();
    this.setModal(ModalStatus.ADD);
  };

  onAccept = async () => {
    const { hasError } = await this.form.$.validate();
    if (hasError) return;
    const data: Partial<IPeripheral> = this.form.$.values;
    if (Object.hasOwn(data, '_id') && !data._id) delete data._id;
    data.gateway = this.#gateway;

    const { ok, error } = await (data._id ? peripheralSvc.editPeripheral(data) : peripheralSvc.addPeripheral(data));
    if (ok) {
      void this.loadPeripherals();
      this.setModal();
      this.form.$.reset();
      return;
    }
    if (error.code === 11000) {
      Object.entries(error.data).forEach(([key, value]) => {
        const state = this.form[key as keyof typeof this.form];
        state?.setError(`A peripheral with the '${key}: ${value}' already exists`);
      });
    } else {
      alert(error.message);
    }
  };
  // endregion
}

export const peripheralStr = new PeripheralStore();
