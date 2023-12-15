import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { ISalesByMonth } from '~/salesByMonth.type';

function BrandService() {
  const { get } = serviceRestFactory(`${EnvClient.API}/brands`);

  return {
    getBrandSales: (brandId?: string) => get<ISalesByMonth[], undefined>(`/${brandId}/sales`)
  };
}

export const brandSvc = BrandService();
