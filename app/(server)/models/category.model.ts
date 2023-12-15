import mongoose, { model, Model, Schema } from 'mongoose';
import { ICategories } from '~/categories.type';

type CategoriesModelType = Model<ICategories>;
const CategoriesSchema = new Schema<ICategories, CategoriesModelType>(
  {
    name: {
      type: Schema.Types.String,
      unique: true
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CategoriesSchema.virtual('products', {
  ref: 'Products',
  localField: '_id',
  foreignField: 'categories'
});
export const CategoriesModel =
  mongoose.models?.Categories || model<ICategories, CategoriesModelType>('Categories', CategoriesSchema);
