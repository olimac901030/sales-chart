'use client';
import { CloseIco, IconButton } from '@ui/index';
import { useDialog } from '@component/layouts/Dialog/hooks/useDialog';

export function CloseBtn() {
  const { onClose } = useDialog();
  return onClose ? (
    <IconButton aria-label="close" onClick={onClose} color="inherit">
      <CloseIco />
    </IconButton>
  ) : (
    <></>
  );
}
