import { IDialogTitle, Title } from './components/Title';
import { DialogContainer } from './components/DialogContainer';
import { PropsWithChildren } from 'react';
import { Actions } from '@component/layouts/Dialog/components/Actions';
import { DialogContent } from '@ui/index';

export type IDialog = IDialogTitle & PropsWithChildren;

export const Dialog = function ({ title, children }: IDialog) {
  return (
    <DialogContainer>
      <Title title={title} />
      <DialogContent dividers>{children}</DialogContent>
      <Actions />
    </DialogContainer>
  );
};
