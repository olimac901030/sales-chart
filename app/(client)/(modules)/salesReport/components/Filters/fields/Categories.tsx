'use client';
import { Select } from '@field/Select';
import { observer } from 'mobx-react-lite';
import { categoryStr } from '../../../stores/CategoryStore';
import { salesReportStr } from '../../../stores/SalesReportStore';

export const Categories = observer(function () {
  return (
    <Select
      name="category"
      label="Categoría"
      options={categoryStr.getOptions}
      disabled={!categoryStr.hasItems}
      loading={categoryStr.loading}
      onChange={salesReportStr.onChangeCategory}
    />
  );
});
