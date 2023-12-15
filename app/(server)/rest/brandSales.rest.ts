import { BaseRest } from '$common/base.rest';
import { BrandCtrl } from '$ctrl/brand.controller';

export class BrandRest extends BaseRest {
  constructor() {
    super();
  }
  GET = async () => {
    try {
      const {
        query: { id }
      } = this.req;
      const response = await BrandCtrl.getSalesById(String(id));
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const brandRest = new BrandRest();
