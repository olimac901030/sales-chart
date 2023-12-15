import { BaseRest } from '$common/base.rest';
import { peripheralCtrl } from '$ctrl/peripheral.controller';

export class ExistRest extends BaseRest {
  constructor() {
    super();
  }
  GET = async () => {
    try {
      const {
        query: { uid }
      } = this.req;
      const response = await peripheralCtrl.getPeripheralByUID(uid as string);
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const peripheralExistRest = new ExistRest();
