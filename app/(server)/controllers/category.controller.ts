import { CategoryRepository } from '$repo/category.repository';
import { IProduct } from '~/product.type';

export class CategoryController {
  getAll = async () => await CategoryRepository.read();
  getProductsById = async (id: string) => {
    const category = await CategoryRepository.readById(id);
    if (!category?.products) return [];
    return category.products.map((product: IProduct) => {
      return {
        id: product._id,
        name: product.name
      };
    });
  };
}

export const categoryCtrl = new CategoryController();
