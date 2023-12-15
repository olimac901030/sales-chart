import { useContext } from 'react';
import { DialogContext } from '@component/layouts/Dialog/context/dialog.context';

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) throw new Error('DialogContext must be used within a DialogContext.Provider');
  return context;
}
