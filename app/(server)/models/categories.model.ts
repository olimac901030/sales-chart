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

// GatewaySchema.virtual('peripherals', {
//   ref: 'Peripheral',
//   localField: '_id',
//   foreignField: 'gateway',
//   count: true
// });
export const CategoriesModel =
  mongoose.models?.Gateway || model<ICategories, CategoriesModelType>('Categories', CategoriesSchema);
