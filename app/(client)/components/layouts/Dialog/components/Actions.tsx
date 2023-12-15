'use client';
import { useDialog } from '@component/layouts/Dialog/hooks/useDialog';
import { Button, CancelIco, DialogActions, SaveIco } from '@ui/index';

export const Actions = function () {
  const { onAccept, onCancel } = useDialog();

  return (
    <DialogActions>
      <Button startIcon={<CancelIco />} onClick={onCancel} variant="outlined">
        Cancel
      </Button>
      <Button startIcon={<SaveIco />} onClick={onAccept} variant="contained" disableElevation>
        Accept
      </Button>
    </DialogActions>
  );
};
