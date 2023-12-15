import { BaseRest } from '$common/base.rest';
import { peripheralCtrl } from '$ctrl/peripheral.controller';

export class PeripheralRest extends BaseRest {
  constructor() {
    super();
  }

  POST = async () => {
    try {
      const { body } = this.req;
      const response = await peripheralCtrl.add(body);
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
  GET = async () => {
    try {
      const {
        query: { gateway }
      } = this.req;
      const response = await peripheralCtrl.getAll(String(gateway));
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };

  DELETE = async () => {
    try {
      const {
        query: { id }
      } = this.req;
      const response = await peripheralCtrl.remove(String(id));
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };

  PUT = async () => {
    try {
      const {
        query: { id },
        body
      } = this.req;
      const response = await peripheralCtrl.update(String(id), body);
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const peripheralRest = new PeripheralRest();
