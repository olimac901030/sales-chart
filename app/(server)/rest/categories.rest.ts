import { BaseRest } from '$common/base.rest';
import { categoriesCtrl } from '$ctrl/categories.controller';

export class CategoriesRest extends BaseRest {
  constructor() {
    super();
  }
  GET = async () => {
    try {
      const response = await categoriesCtrl.getAll();
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };

  POST = async () => {
    try {
      const response = await categoriesCtrl.populate();
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const categoriesRest = new CategoriesRest();
