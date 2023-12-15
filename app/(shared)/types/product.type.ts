import { IBrand } from '~/brand.type';

export interface IProduct {
  _id: string;
  name: string;
  category?: string;
  brands?: IBrand[];
}
