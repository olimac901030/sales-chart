import { GatewayModel } from '$model/gateway.model';
import { TFormSaleFilters } from '~/gateway.type';
import { PeripheralModel } from '$model/peripheral.model';

const POPULATE = 'ip name peripherals serial';

async function create(gateway: Omit<TFormSaleFilters, '_id'>): Promise<TFormSaleFilters> {
  return GatewayModel.create(gateway);
}

async function readById(id: string): Promise<TFormSaleFilters | null> {
  return GatewayModel.findById(id)
    .select(POPULATE)
    .populate({ path: 'peripherals', model: PeripheralModel }) as Promise<TFormSaleFilters | null>;
}

async function read(): Promise<TFormSaleFilters[] | null> {
  return GatewayModel.find({ id: { $ne: -1 } })
    .select(POPULATE)
    .populate({ path: 'peripherals', model: PeripheralModel });
}

async function update(id: string, data: Partial<TFormSaleFilters>): Promise<TFormSaleFilters | null> {
  return GatewayModel.findByIdAndUpdate(id, data).select(POPULATE);
}

async function remove(id: string): Promise<TFormSaleFilters | null> {
  return GatewayModel.findByIdAndRemove(id);
}

export const GatewayRepository = { create, readById, read, update, remove };
