import { action, makeObservable, observable } from 'mobx';
import { ModalStatus, ModalType } from '~/modal.type';

export class DialogStore {
  modal: ModalType = ModalStatus.NONE;

  constructor() {
    makeObservable(this, {
      modal: observable,
      setModal: action
    });
  }

  setModal = (status: ModalType = ModalStatus.NONE) => {
    this.modal = status;
  };
  get isOpenModal(): boolean {
    return this.modal !== ModalStatus.NONE;
  }

  get isAdding(): boolean {
    return this.modal === ModalStatus.ADD;
  }

  get disableAdding(): boolean {
    return false;
  }

  onClose = () => {
    this.setModal();
  };

  onAccept = () => {
    this.setModal();
  };

  onCancel = () => {
    this.setModal();
  };
}
