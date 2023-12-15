'use client';
import { Select } from '@field/Select';
import { observer } from 'mobx-react-lite';
import { productStr } from '../../../stores/ProductStore';
import { salesReportStr } from '../../../stores/SalesReportStore';

export const Products = observer(function () {
  return (
    <Select
      name="product"
      label="Product"
      options={productStr.getOptions}
      disabled={!productStr.hasItems}
      loading={productStr.loading}
      onChange={salesReportStr.onChangeProduct}
    />
  );
});
