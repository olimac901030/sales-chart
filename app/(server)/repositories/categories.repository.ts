import { GatewayModel } from '$model/gateway.model';
import { IGateway } from '~/gateway.type';
import { PeripheralModel } from '$model/peripheral.model';

const POPULATE = 'ip name peripherals serial';

async function create(gateway: Omit<IGateway, '_id'>): Promise<IGateway> {
  return GatewayModel.create(gateway);
}

async function readById(id: string): Promise<IGateway | null> {
  return GatewayModel.findById(id)
    .select(POPULATE)
    .populate({ path: 'peripherals', model: PeripheralModel }) as Promise<IGateway | null>;
}

async function read(): Promise<IGateway[] | null> {
  return GatewayModel.find({ id: { $ne: -1 } })
    .select(POPULATE)
    .populate({ path: 'peripherals', model: PeripheralModel });
}

async function update(id: string, data: Partial<IGateway>): Promise<IGateway | null> {
  return GatewayModel.findByIdAndUpdate(id, data).select(POPULATE);
}

async function remove(id: string): Promise<IGateway | null> {
  return GatewayModel.findByIdAndRemove(id);
}

export const GatewayRepository = { create, readById, read, update, remove };
