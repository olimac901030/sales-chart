import mongoose, { model, Model, Schema } from 'mongoose';
import { IProducts } from '~/products.type';

type ProductsModelType = Model<IProducts>;
const ProductsSchema = new Schema<IProducts, ProductsModelType>({
  name: {
    type: Schema.Types.String,
    unique: true
  },
  categories: {
    type: Schema.Types.ObjectId,
    ref: 'Categories'
  }
});

// GatewaySchema.virtual('peripherals', {
//   ref: 'Peripheral',
//   localField: '_id',
//   foreignField: 'gateway',
//   count: true
// });
export const ProductsModel =
  mongoose.models?.Products || model<IProducts, ProductsModelType>('Products', ProductsSchema);
