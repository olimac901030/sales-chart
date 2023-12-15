import { ProductRepository } from '$repo/product.repository';
import { IBrand } from '~/brand.type';

export class ProductController {
  getBrandsById = async (id: string) => {
    const product = await ProductRepository.readById(id);
    return (
      product?.brands?.map((brand: IBrand) => {
        return {
          id: brand._id,
          name: brand.name
        };
      }) || []
    );
  };
}

export const ProductCtrl = new ProductController();
