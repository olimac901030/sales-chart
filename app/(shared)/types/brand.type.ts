import { ISale } from '~/sale.type';

export interface IBrand {
  _id: string;
  name: string;
  product?: string;
  sales?: ISale[];
}
