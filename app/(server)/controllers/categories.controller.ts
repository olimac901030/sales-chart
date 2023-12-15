import { CategoriesRepository } from '$repo/categories.repository';

export class CategoriesController {
  getAll = async () => await CategoriesRepository.read();

  populate = async () => {
    await CategoriesRepository.populate();
  };
}

export const categoriesCtrl = new CategoriesController();
