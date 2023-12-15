import { CategoryModel } from '$model/category.model';
import { ICategory } from '~/category.type';
import { ProductModel } from '$model/product.model';

async function read(): Promise<ICategory[] | null> {
  return CategoryModel.find({ id: { $ne: -1 } }).select('name');
  //   .populate({ path: 'peripherals', model: PeripheralModel });
}

async function readById(id: string): Promise<ICategory | null> {
  return CategoryModel.findById(id)
    .select('name products')
    .populate({ path: 'products', model: ProductModel }) as Promise<ICategory | null>;
}

export const CategoryRepository = { read, readById };
