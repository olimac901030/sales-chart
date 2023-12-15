import { CategoryRepository } from '$repo/categoryRepository';

export class CategoriesController {
  getAll = async () => await CategoryRepository.read();
  getProductsById = async (id: string) => await CategoryRepository.readById(id);
}

export const categoriesCtrl = new CategoriesController();
