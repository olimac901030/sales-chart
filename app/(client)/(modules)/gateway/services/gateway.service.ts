import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { IGateway } from '~/gateway.type';

function GatewayService() {
  const { get, post, remove, put } = serviceRestFactory(`${EnvClient.API}/gateway`);

  return {
    getAll: () => get<IGateway[], undefined>(`/all`),
    getById: (id: string) => get<IGateway, undefined>(`/${id}`),
    addGateway: (data: Partial<IGateway>) => post<IGateway, Partial<IGateway>>(``, { data }),
    editGateway: (data: Partial<IGateway>) => put<IGateway, Partial<IGateway>>(`/${data._id}`, { data }),
    remove: (id: string) => remove<undefined, string>(`/${id}`)
  };
}

export const gatewaySvc = GatewayService();
