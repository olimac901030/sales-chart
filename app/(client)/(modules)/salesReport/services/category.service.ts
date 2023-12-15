import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { ICategories } from '~/categories.type';

function CategoryService() {
  const { get } = serviceRestFactory(`${EnvClient.API}/categories`);

  return {
    getAll: () => get<ICategories[], undefined>(``)
  };
}

export const categorySvc = CategoryService();
