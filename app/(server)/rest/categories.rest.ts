import { BaseRest } from '$common/base.rest';
import { gatewayCtrl } from '$ctrl/gateways.controller';

export class CategoriesRest extends BaseRest {
  constructor() {
    super();
  }
  GET = async () => {
    try {
      const {
        query: { id }
      } = this.req;
      const response = await gatewayCtrl.getAll()
      return this.success('Categories');
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const categoriesRest = new CategoriesRest();
