import { CategoriesRepository } from '$repo/categories.repository';

export class CategoriesController {
  getAll = async () => await CategoriesRepository.read();
  getProductsById = async (id: string) => await CategoriesRepository.readById(id);
}

export const categoriesCtrl = new CategoriesController();
