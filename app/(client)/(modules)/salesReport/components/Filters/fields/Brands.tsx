'use client';
import { Select } from '@field/Select';
import { observer } from 'mobx-react-lite';
import { brandStr } from '../../../stores/BrandStore';
import { salesReportStr } from '../../../stores/SalesReportStore';

export const Brands = observer(function () {
  return (
    <Select
      name="brand"
      label="Marcas"
      options={brandStr.getOptions}
      disabled={!brandStr.hasItems}
      loading={brandStr.loading}
      onChange={salesReportStr.onChangeBrand}
    />
  );
});
