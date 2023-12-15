import mongoose, { model, Model, Schema } from 'mongoose';
import { IGateway } from '~/gateway.type';

type GatewayModelType = Model<IGateway>;
const GatewaySchema = new Schema<IGateway, GatewayModelType>(
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
export const GatewayModel = mongoose.models?.Gateway || model<IGateway, GatewayModelType>('Gateway', GatewaySchema);
