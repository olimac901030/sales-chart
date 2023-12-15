import { observer } from 'mobx-react-lite';
import { useDialog } from '@component/layouts/Dialog/hooks/useDialog';
import { PropsWithChildren } from 'react';
import { Dialog } from '@ui/index';

export type IDialogContainer = PropsWithChildren;

export const DialogContainer = observer(function ({ children }: IDialogContainer) {
  const store = useDialog();

  return (
    <Dialog onClose={store.onClose} open={store.isOpenModal} fullWidth>
      {children}
    </Dialog>
  );
});
