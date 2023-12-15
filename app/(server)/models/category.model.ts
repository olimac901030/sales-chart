import mongoose, { model, Model, Schema } from 'mongoose';
import { ICategory } from '~/category.type';

type CategoryModelType = Model<ICategory>;
const CategorySchema = new Schema<ICategory, CategoryModelType>(
  {
    name: {
      type: Schema.Types.String,
      unique: true
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CategorySchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'category'
});
export const CategoryModel =
  mongoose.models?.Category || model<ICategory, CategoryModelType>('Category', CategorySchema);
