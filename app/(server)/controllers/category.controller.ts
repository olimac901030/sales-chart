import { CategoryRepository } from '$repo/categoryRepository';

export class CategoryController {
  getAll = async () => await CategoryRepository.read();
  getProductsById = async (id: string) => await CategoryRepository.readById(id);
}

export const categoryCtrl = new CategoryController();
