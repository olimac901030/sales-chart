import mongoose, { model, Model, Schema } from 'mongoose';
import { ISale } from '~/sale.type';

type SaleModelType = Model<ISale>;
const SaleSchema = new Schema<ISale, SaleModelType>({
  date: {
    type: Schema.Types.Date
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand'
  },
  amount: {
    type: Schema.Types.Number
  }
});

export const SaleModel = mongoose.models?.Sale || model<ISale, SaleModelType>('Sale', SaleSchema);
