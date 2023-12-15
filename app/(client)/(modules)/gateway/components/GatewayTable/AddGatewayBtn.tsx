'use client';
import { AddIco, IconButton, Tooltip } from '@ui/index';
import { gatewayStr } from '#gateway/stores/gateway.store';
import { observer } from 'mobx-react-lite';

export const AddGatewayBtn = observer(function () {
  return (
    <Tooltip title="Add Gateway">
      <IconButton color="inherit" onClick={gatewayStr.onClickAddGateway}>
        <AddIco />
      </IconButton>
    </Tooltip>
  );
});
