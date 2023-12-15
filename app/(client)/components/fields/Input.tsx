'use client';
import { FormContext } from '@form/form.context';
import { TextFieldProps } from '@mui/material/TextField';
import { TextField } from '@ui/index';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, useCallback, useContext } from 'react';

type FsTextType = Omit<TextFieldProps, 'onChange' | 'error' | 'helperText' | 'value' | 'id' | 'variant'>;

export const Input = observer(function ({ name, ...props }: FsTextType) {
  const state = (useContext(FormContext) as any)[String(name)];
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    state.onChange(e.target.value);
  }, []);

  return (
    <TextField
      size="small"
      value={state?.value || ''}
      id={state?.id}
      error={state?.hasError}
      helperText={state?.error}
      onChange={onChange}
      {...props}
    />
  );
});
