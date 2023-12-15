import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { IBase } from '~/base.type';

function CategoryService() {
  const { get } = serviceRestFactory(`${EnvClient.API}/categories`);

  return {
    getAll: () => get<IBase[], undefined>(``),
    getCategoryProducts: (id?: string) => get<IBase[], undefined>(`/${id}/products`)
  };
}

export const categorySvc = CategoryService();
