'use client';
import { PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { FormContext } from '@form/form.context';
import { salesReportStr } from '../../stores/salesReportStore';

export const FormWrapper = observer(function ({ children }: PropsWithChildren) {
  return <FormContext.Provider value={salesReportStr.form}>{children}</FormContext.Provider>;
});
