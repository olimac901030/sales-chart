import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { IBase } from '~/base.type';

function CategoryService() {
  const { get } = serviceRestFactory(`${EnvClient.API}/products`);

  return {
    getProductBrands: (productId?: string) => get<IBase[], undefined>(`/${productId}/brands`)
  };
}

export const productSvc = CategoryService();
