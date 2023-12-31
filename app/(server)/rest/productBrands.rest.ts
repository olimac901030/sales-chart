import { BaseRest } from '$common/base.rest';
import { ProductCtrl } from '$ctrl/product.controller';

export class ProductRest extends BaseRest {
  constructor() {
    super();
  }
  GET = async () => {
    try {
      const {
        query: { id }
      } = this.req;
      const response = await ProductCtrl.getBrandsById(String(id));
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const productRest = new ProductRest();
