'use client';
import { DialogWrapper } from '@component/layouts/Dialog/components/DialogWrapper';
import { gatewayStr } from '#gateway/stores/gateway.store';
import { PropsWithChildren } from 'react';
import { Dialog } from '@component/layouts/Dialog';
import { observer } from 'mobx-react-lite';
import { FormContext } from '@form/form.context';

export const GatewayWrapper = observer(function ({ children }: PropsWithChildren) {
  return (
    <DialogWrapper store={gatewayStr}>
      <Dialog title={`${gatewayStr.isAdding ? 'Add' : 'Edit'} Gateway`}>
        <FormContext.Provider value={gatewayStr.form}>{children}</FormContext.Provider>
      </Dialog>
    </DialogWrapper>
  );
});
