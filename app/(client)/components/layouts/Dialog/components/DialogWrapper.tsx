'use client';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';
import { DialogStore } from '@component/layouts/Dialog/store/dialog.store';
import { DialogContext } from '@component/layouts/Dialog/context/dialog.context';

export interface IDialogWrapper extends PropsWithChildren {
  store: DialogStore;
}

export const DialogWrapper = observer(function ({ store, children }: IDialogWrapper) {
  return <DialogContext.Provider value={store}>{children}</DialogContext.Provider>;
});
