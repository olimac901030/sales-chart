import { ValuesType } from '~/generics.type';

export const PeripheralStatus = {
  ONLINE: 'online',
  OFFLINE: 'offline'
} as const;

export type PeripheralStatusType = ValuesType<typeof PeripheralStatus>;
