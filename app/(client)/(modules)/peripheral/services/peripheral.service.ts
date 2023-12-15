import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { IPeripheral } from '~/peripheral.type';

function PeripheralService() {
  const { get, post, remove, put } = serviceRestFactory(`${EnvClient.API}/peripheral`);

  return {
    getAll: (gateway: string) => get<IPeripheral[], undefined>(`/gateway/${gateway}`),
    addPeripheral: (data: Partial<IPeripheral>) => post<IPeripheral, Partial<IPeripheral>>(``, { data }),
    editPeripheral: (data: Partial<IPeripheral>) => put<IPeripheral, Partial<IPeripheral>>(`/${data._id}`, { data }),
    remove: (id: string) => remove<undefined, string>(`/${id}`)
  };
}

export const peripheralSvc = PeripheralService();
