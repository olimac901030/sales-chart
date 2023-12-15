'use client';
import { TableCell, TableRow } from '@ui/index';
import { peripheralStr } from '#peripheral/stores/peripheral.store';
import { observer } from 'mobx-react-lite';
import { TableActions } from '@component/table/TableActions';
import { useCallback } from 'react';
import { IPeripheral } from '~/peripheral.type';

export const PeripheralRows = observer(function () {
  const { onEditPeripheral, onDeletePeripheral } = peripheralStr;
  const onAction = useCallback(
    (row: IPeripheral, action: (row: IPeripheral, index: number) => void, index: number) => () => action(row, index),
    []
  );

  return (
    <>
      {peripheralStr.items.map((row, index) => (
        <TableRow key={row.uid}>
          <TableCell component="th" scope="row">
            {row.uid}
          </TableCell>
          <TableCell>{row.vendor}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell align="center">
            {String(row.createdAt ? new Date(row.createdAt).toLocaleString('en-US') : '-')}
          </TableCell>
          <TableActions
            onEdit={onAction(row, onEditPeripheral, index)}
            onDelete={onAction(row, onDeletePeripheral, index)}
          />
        </TableRow>
      ))}
    </>
  );
});
