import { ITitleBar, TitleBar } from '@component/layouts/TitleBar';
import { DialogTitle } from '@ui/index';
import { CloseBtn } from './CloseBtn';

export type IDialogTitle = {
  title: ITitleBar['title'];
};

export function Title({ title }: IDialogTitle) {
  return (
    <DialogTitle sx={{ m: 0, p: 0 }}>
      <TitleBar title={title} toolBarActions={<CloseBtn />} />
    </DialogTitle>
  );
}
