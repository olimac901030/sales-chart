import { ProductModel } from '$model/product.model';
import { IProduct } from '~/product.type';
import { BrandModel } from '$model/brand.model';

async function readById(id: string): Promise<IProduct | null> {
  return ProductModel.findById(id)
    .select('name brands')
    .populate({ path: 'brands', model: BrandModel }) as Promise<IProduct | null>;
}

export const ProductRepository = { readById };
