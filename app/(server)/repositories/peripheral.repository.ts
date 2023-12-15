import { PeripheralModel } from '$model/peripheral.model';
import { IPeripheral } from '~/peripheral.type';
import { GatewayModel } from '$model/gateway.model';

const POPULATE = 'uid vendor status createdAt gateway';

async function create(peripheral: Omit<IPeripheral, '_id'>): Promise<IPeripheral> {
  return PeripheralModel.create(peripheral);
}

async function read(gateway: string): Promise<IPeripheral[] | null> {
  return PeripheralModel.find({ id: { $ne: -1 }, gateway }).select(POPULATE);
}

async function findByUID(uid: string): Promise<IPeripheral | null> {
  return PeripheralModel.findOne({ id: { $ne: -1 }, uid });
}

async function readById(id: string): Promise<IPeripheral> {
  return PeripheralModel.findById(id)
    .select(POPULATE)
    .populate({ path: 'gateway', model: GatewayModel }) as Promise<IPeripheral>;
}

async function update(id: string, data: Partial<IPeripheral>): Promise<IPeripheral | null> {
  return PeripheralModel.findByIdAndUpdate(id, data).select(POPULATE);
}

async function remove(id: string): Promise<IPeripheral | null> {
  return PeripheralModel.findByIdAndRemove(id);
}

async function removeByGateway(gateway: string): Promise<any> {
  return PeripheralModel.deleteMany({ gateway });
}

export const PeripheralRepository = { removeByGateway, readById, findByUID, create, read, update, remove };
