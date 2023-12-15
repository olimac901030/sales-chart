import { BrandModel } from '$model/brand.model';
import { IBrand } from '~/brand.type';
import { SaleModel } from '$model/sale.model';

async function readById(id: string): Promise<IBrand | null> {
  return BrandModel.findById(id)
    .select('name sales')
    .populate({ path: 'sales', model: SaleModel }) as Promise<IBrand | null>;
}

export const BrandRepository = { readById };
