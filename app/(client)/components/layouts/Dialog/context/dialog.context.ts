import { createContext } from 'react';
import { DialogStore } from '@component/layouts/Dialog/store/dialog.store';

export const DialogContext = createContext<DialogStore>(undefined as unknown as DialogStore);
