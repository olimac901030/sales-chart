'use client';
import { Select } from '@field/Select';
import { observer } from 'mobx-react-lite';
import { categoryStr } from '../../../stores/CategoryStore';

export const Categories = observer(function () {
  return <Select name="category" label="Categoría" options={categoryStr.getOptions} />;
});
