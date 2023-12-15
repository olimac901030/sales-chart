import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { TFormSaleFilters } from '~/gateway.type';

function GatewayService() {
  const { get, post, remove, put } = serviceRestFactory(`${EnvClient.API}/gateway`);

  return {
    getAll: () => get<TFormSaleFilters[], undefined>(`/all`),
    getById: (id: string) => get<TFormSaleFilters, undefined>(`/${id}`),
    addGateway: (data: Partial<TFormSaleFilters>) => post<TFormSaleFilters, Partial<TFormSaleFilters>>(``, { data }),
    editGateway: (data: Partial<TFormSaleFilters>) => put<TFormSaleFilters, Partial<TFormSaleFilters>>(`/`, { data }),
    remove: (id: string) => remove<undefined, string>(`/${id}`)
  };
}

export const gatewaySvc = GatewayService();
