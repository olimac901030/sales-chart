import { BaseRest } from '$common/base.rest';
import { gatewayCtrl } from '$ctrl/gateways.controller';

export class GatewayRest extends BaseRest {
  constructor() {
    super();
  }

  POST = async () => {
    try {
      const { body } = this.req;
      const response = await gatewayCtrl.add(body);
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
  GET = async () => {
    try {
      const {
        query: { id }
      } = this.req;
      const response = await (id === 'all' ? gatewayCtrl.getAll() : gatewayCtrl.getById(String(id)));
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
      const response = await gatewayCtrl.remove(String(id));
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
      const response = await gatewayCtrl.update(String(id), body);
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const gatewayRest = new GatewayRest();
