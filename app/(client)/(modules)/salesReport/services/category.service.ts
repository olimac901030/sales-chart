import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { ICategory } from '~/category.type';

function CategoryService() {
  const { get } = serviceRestFactory(`${EnvClient.API}/categories`);

  return {
    getAll: () => get<ICategory[], undefined>(``),
    getCategoryProducts: (id?: string) => get<ICategory[], undefined>(`/${id}/products`)
  };
}

export const categorySvc = CategoryService();
