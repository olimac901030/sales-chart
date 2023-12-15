import mongoose, { model, Model, Schema } from 'mongoose';
import { TFormSaleFilters } from '~/gateway.type';

type GatewayModelType = Model<TFormSaleFilters>;
const GatewaySchema = new Schema<TFormSaleFilters, GatewayModelType>(
  {
    serial: {
      type: Schema.Types.String,
      unique: true,
      required: true
    },
    name: {
      type: Schema.Types.String,
      unique: true
    },
    ip: { type: Schema.Types.String, format: 'ip-address' }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

GatewaySchema.virtual('peripherals', {
  ref: 'Peripheral',
  localField: '_id',
  foreignField: 'gateway',
  count: true
});
export const GatewayModel =
  mongoose.models?.Gateway || model<TFormSaleFilters, GatewayModelType>('Gateway', GatewaySchema);
