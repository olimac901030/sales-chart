import { ProductsModel } from '$model/product.model';
import { IProducts } from '~/product.type';
import { BrandsModel } from '$model/brands.model';

async function readById(id: string): Promise<IProducts | null> {
  const response = ProductsModel.findById(id)
    .select('name brands')
    .populate({ path: 'brands', model: BrandsModel }) as Promise<IProducts | null>;
  return response;
}

export const ProductsRepository = { readById };
