import mongoose, { model, Model, Schema } from 'mongoose';
import { PeripheralStatus } from '~/peripheralStatus.type';
import { IPeripheral } from '~/peripheral.type';

export type PeripheralModelType = Model<IPeripheral>;
const PeripheralSchema = new Schema<IPeripheral, PeripheralModelType>(
  {
    uid: {
      type: Schema.Types.Number,
      unique: true,
      required: true
    },
    vendor: Schema.Types.String,
    status: {
      type: Schema.Types.String,
      enum: Object.values(PeripheralStatus)
    },
    createdAt: Schema.Types.Date,
    gateway: {
      type: Schema.Types.ObjectId,
      ref: 'Gateway'
    }
  },
  {
    timestamps: true
  }
);
export const PeripheralModel =
  mongoose.models?.Peripheral || model<IPeripheral, PeripheralModelType>('Peripheral', PeripheralSchema);
