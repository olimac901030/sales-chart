'use client';
import { DialogWrapper } from '@component/layouts/Dialog/components/DialogWrapper';
import { peripheralStr } from '#peripheral/stores/peripheral.store';
import { PropsWithChildren } from 'react';
import { Dialog } from '@component/layouts/Dialog';
import { observer } from 'mobx-react-lite';
import { FormContext } from '@form/form.context';

export const PeripheralWrapper = observer(function ({ children }: PropsWithChildren) {
  return (
    <DialogWrapper store={peripheralStr}>
      <Dialog title={`${peripheralStr.isAdding ? 'Add' : 'Edit'} Peripheral`}>
        <FormContext.Provider value={peripheralStr.form}>{children}</FormContext.Provider>
      </Dialog>
    </DialogWrapper>
  );
});
