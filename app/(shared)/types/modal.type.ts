import { ValuesType } from '~/generics.type';

export const ModalStatus = {
  NONE: 'NONE',
  ADD: 'ADD',
  EDIT: 'EDIT'
} as const;

export type ModalType = ValuesType<typeof ModalStatus>;
