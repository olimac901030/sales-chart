import mongoose, { model, Model, Schema } from 'mongoose';
import { IBrand } from '~/brand.type';

type BrandModelType = Model<IBrand>;
const BrandSchema = new Schema<IBrand, BrandModelType>({
  name: {
    type: Schema.Types.String,
    unique: true
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
});

// GatewaySchema.virtual('peripherals', {
//   ref: 'Peripheral',
//   localField: '_id',
//   foreignField: 'gateway',
//   count: true
// });
export const BrandModel = mongoose.models?.Brand || model<IBrand, BrandModelType>('Brand', BrandSchema);
