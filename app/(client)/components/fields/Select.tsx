'use client';
import { FormControl, InputLabel, MenuItem, Select as Input, SelectChangeEvent } from '@ui/index';
import { useCallback, useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { OptionType } from '@/option.type';
import { FormContext } from '@form/form.context';
import { Skeleton } from '@ui/index';
import { SxProps } from '@mui/system';

interface ISelect {
  label: string;
  name: string;
  options: OptionType[];
  disabled?: boolean;
  loading?: boolean;

  onChange?(value: string): void;
}

const INPUT_SX = {
  '&': {
    '@media(min-width:661px)': {
      maxWidth: '200px'
    }
  }
} as SxProps;

export const Select = observer(function ({ options, label, name, disabled, loading, onChange }: ISelect) {
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

  const onChangeAction = useCallback((e: SelectChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    state.onChange(value);
    onChange?.(String(value));
  }, []);

  if (loading)
    return <Skeleton animation="wave" variant="rectangular" width={210} height={40} sx={{ borderRadius: '4px' }} />;

  return (
    <FormControl fullWidth size="small" sx={INPUT_SX} disabled={disabled}>
      <InputLabel id={`${state.id}-label`}>{label}</InputLabel>
      <Input
        labelId={`${state.id}-label`}
        id={state.id}
        value={state.value || ''}
        label={label}
        onChange={onChangeAction}
      >
        {items}
      </Input>
    </FormControl>
  );
});
