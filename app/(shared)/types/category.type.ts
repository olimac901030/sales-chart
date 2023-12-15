import { IProduct } from '~/product.type';

export interface ICategory {
  _id: string;
  name: string;
  products?: IProduct[];
}
