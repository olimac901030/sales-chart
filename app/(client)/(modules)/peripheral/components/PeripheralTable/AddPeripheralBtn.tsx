'use client';
import { AddIco, IconButton, Tooltip } from '@ui/index';
import { peripheralStr } from '#peripheral/stores/peripheral.store';
import { observer } from 'mobx-react-lite';

export const AddPeripheralBtn = observer(function () {
  return peripheralStr.disableAdding ? (
    <></>
  ) : (
    <Tooltip title="Add Peripheral">
      <IconButton color="inherit" onClick={peripheralStr.onClickAddPeripheral}>
        <AddIco />
      </IconButton>
    </Tooltip>
  );
});
