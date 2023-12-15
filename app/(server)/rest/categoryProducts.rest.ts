import { BaseRest } from '$common/base.rest';
import { categoryCtrl } from '$ctrl/category.controller';

export class CategoriesRest extends BaseRest {
  constructor() {
    super();
  }
  GET = async () => {
    try {
      const {
        query: { id }
      } = this.req;
      const response = await categoryCtrl.getProductsById(String(id));
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const categoriesRest = new CategoriesRest();
