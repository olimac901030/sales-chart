import mongoose, { model, Model, Schema } from 'mongoose';
import { IProduct } from '~/product.type';

type ProductModelType = Model<IProduct>;
const ProductSchema = new Schema<IProduct, ProductModelType>(
  {
    name: {
      type: Schema.Types.String,
      unique: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ProductSchema.virtual('brands', {
  ref: 'Brand',
  localField: '_id',
  foreignField: 'product'
});
export const ProductModel = mongoose.models?.Product || model<IProduct, ProductModelType>('Product', ProductSchema);
