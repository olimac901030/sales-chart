import { ProductRepository } from '$repo/product.repository';

export class ProductController {
  getBrandsById = async (id: string) => await ProductRepository.readById(id);
}

export const ProductCtrl = new ProductController();
