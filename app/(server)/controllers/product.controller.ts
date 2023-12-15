import { ProductRepository } from '$repo/product.repository';

export class ProductsController {
  getBrandsById = async (id: string) => await ProductRepository.readById(id);
}

export const ProductsCtrl = new ProductsController();
