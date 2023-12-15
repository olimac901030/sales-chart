import mongoose, { model, Model, Schema } from 'mongoose';
import { IBrand } from '~/brand.type';

type BrandModelType = Model<IBrand>;
const BrandSchema = new Schema<IBrand, BrandModelType>(
  {
    name: {
      type: Schema.Types.String,
      unique: true
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

BrandSchema.virtual('sales', {
  ref: 'Sale',
  localField: '_id',
  foreignField: 'brand'
});
export const BrandModel = mongoose.models?.Brand || model<IBrand, BrandModelType>('Brand', BrandSchema);
