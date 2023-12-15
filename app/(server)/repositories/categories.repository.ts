import { CategoriesModel } from '$model/categories.model';
import { ICategories } from '~/categories.type';
import { PeripheralModel } from '$model/peripheral.model';
import { IGateway } from '~/gateway.type';
import { ProductsModel } from '$model/products.model';

async function read(): Promise<ICategories[] | null> {
  return CategoriesModel.find({ id: { $ne: -1 } }).select('name');
  //   .populate({ path: 'peripherals', model: PeripheralModel });
}

async function readById(id: string): Promise<ICategories | null> {
  return CategoriesModel.findById(id)
    .select('name products')
    .populate({ path: 'products', model: ProductsModel }) as Promise<ICategories | null>;
}

export const CategoriesRepository = { read, readById };
