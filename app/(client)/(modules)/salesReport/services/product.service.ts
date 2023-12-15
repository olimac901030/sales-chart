import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { ICategory } from '~/category.type';

function CategoryService() {
  const { get } = serviceRestFactory(`${EnvClient.API}/products`);

  return {
    getProductBrands: (productId?: string) => get<ICategory[], undefined>(`${productId}/brands`)
  };
}

export const productSvc = CategoryService();
