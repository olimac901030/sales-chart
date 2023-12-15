'use client';
import { Select } from '@field/Select';
import { observer } from 'mobx-react-lite';
import { productStr } from '../../../stores/ProductStore';

export const Products = observer(function () {
  return <Select name="product" label="Product" options={productStr.getOptions} disabled={!productStr.hasItems} />;
});
