import { action, makeObservable, observable } from 'mobx';
import { IGateway } from '~/gateway.type';
import { ModalStatus } from '~/modal.type';
import { DialogStore } from '@component/layouts/Dialog/store/dialog.store';
import { formFactory } from '@form/formFactory';
import { vRequired } from '@validator/requiered';
import { vIsIpV4 } from '@validator/isIpV4';
import { gatewaySvc } from '#gateway/services/gateway.service';
import { peripheralStr } from '#peripheral/stores/peripheral.store';

export class GatewayStore extends DialogStore {
  form = formFactory<IGateway>({ _id: '', name: '', peripherals: 0, serial: '', ip: '' });

  items: IGateway[] = [];

  constructor() {
    super();
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

  addToItems = (item: IGateway) => {
    this.items = [item, ...this.items];
  };
  setItems = (items: IGateway[] = []) => {
    this.items = items;
  };

  get isEditing(): boolean {
    return this.modal === ModalStatus.EDIT;
  }
  // endregion

  // region METHODS
  setValidators = () => {
    const { serial, ip, name } = this.form;
    serial.withValidator(vRequired);
    name.withValidator(vRequired);
    ip.withValidator(vRequired, vIsIpV4);
  };

  loadGateways = async () => {
    const { ok, data } = await gatewaySvc.getAll();
    if (ok) this.setItems(data);
  };
  // endregion

  // region EVENTS

  onEditGateway = (gateway: IGateway) => {
    this.form.$.onChange({ ...gateway });
    peripheralStr.setGateway(gateway._id);
    void peripheralStr.loadPeripherals();
    this.setModal(ModalStatus.EDIT);
  };

  onDeleteGateway = async (gateway: IGateway) => {
    const { ok } = await gatewaySvc.remove(gateway._id);
    if (ok) await this.loadGateways();
  };

  onClickAddGateway = () => {
    this.form.$.reset();
    this.setModal(ModalStatus.ADD);
  };

  onAccept = async () => {
    const { hasError } = await this.form.$.validate();
    if (hasError) return;
    const gateway: Partial<IGateway> = this.form.$.values;
    if (Object.hasOwn(gateway, '_id') && !gateway._id) delete gateway._id;
    const { ok, data, error } = await (gateway._id ? gatewaySvc.editGateway(gateway) : gatewaySvc.addGateway(gateway));
    if (ok) {
      if (this.isEditing) return this.onCancel();
      void this.loadGateways();
      this.form._id.onChange(data._id);
      this.setModal(ModalStatus.EDIT);
      peripheralStr.setGateway(data._id);
      return;
    }
    if (error.code === 11000) {
      Object.entries(error.data).forEach(([key, value]) => {
        const state = this.form[key as keyof typeof this.form];
        state.setError(`A gateway with the '${key}: ${value}' already exists`);
      });
    }
  };

  onCancel = () => {
    this.setModal();
    peripheralStr.reset();
    void this.loadGateways();
    this.form.$.reset();
  };
  // endregion
}

export const gatewayStr = new GatewayStore();
