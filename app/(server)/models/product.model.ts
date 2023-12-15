import mongoose, { model, Model, Schema } from 'mongoose';
import { IProducts } from '~/products.type';

type ProductsModelType = Model<IProducts>;
const ProductsSchema = new Schema<IProducts, ProductsModelType>(
  {
    name: {
      type: Schema.Types.String,
      unique: true
    },
    categories: {
      type: Schema.Types.ObjectId,
      ref: 'Categories'
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ProductsSchema.virtual('brands', {
  ref: 'Brands',
  localField: '_id',
  foreignField: 'products'
});
export const ProductsModel =
  mongoose.models?.Products || model<IProducts, ProductsModelType>('Products', ProductsSchema);
