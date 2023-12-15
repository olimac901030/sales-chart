'use client';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';
import { gatewayStr } from '#gateway/stores/gateway.store';

export const GatewayPeripherals = observer(function ({ children }: PropsWithChildren) {
  return gatewayStr.isEditing ? <>{children}</> : <></>;
});
