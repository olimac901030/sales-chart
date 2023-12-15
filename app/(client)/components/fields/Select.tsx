'use client';
import { FormControl, InputLabel, MenuItem, Select as Input, SelectChangeEvent } from '@ui/index';
import { useCallback, useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { OptionType } from '@/option.type';
import { FormContext } from '@form/form.context';

interface ISelect {
  label: string;
  name: string;
  options: OptionType[];
}

export const Select = observer(function ({ options, label, name }: ISelect) {
  const state = (useContext(FormContext) as any)[String(name)];

  const items = useMemo(
    () =>
      options.map(({ value, label }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      )),
    [options]
  );

  const onChange = useCallback((e: SelectChangeEvent<HTMLInputElement>) => {
    state.onChange(e.target.value);
  }, []);

  console.log(state);

  return (
    <FormControl fullWidth size="small" sx={{ maxWidth: '200px' }}>
      <InputLabel id={`${state.id}-label`}>{label}</InputLabel>
      <Input labelId={`${state.id}-label`} id={state.id} value={state.value || ''} label={label} onChange={onChange}>
        <MenuItem value="undefined">
          <em>None</em>
        </MenuItem>
        {items}
      </Input>
    </FormControl>
  );
});
