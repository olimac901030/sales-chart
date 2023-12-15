import { BaseRest } from '$common/base.rest';
import { categoryCtrl } from '$ctrl/category.controller';

export class CategoriesRest extends BaseRest {
  constructor() {
    super();
  }
  GET = async () => {
    try {
      const response = await categoryCtrl.getAll();
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const categoriesRest = new CategoriesRest();
