import { PeripheralStatusType } from '~/peripheralStatus.type';

export interface IPeripheral {
  _id: string;
  uid: number;
  vendor: string;
  createdAt?: Date;
  status: PeripheralStatusType;
  gateway?: string;
}
