'use client';
import { TableCell, TableRow } from '@ui/index';
import { gatewayStr } from '#gateway/stores/gateway.store';
import { observer } from 'mobx-react-lite';
import { TableActions } from '@component/table/TableActions';
import { useCallback } from 'react';
import { IGateway } from '~/gateway.type';

export const GatewayRows = observer(function () {
  const { onEditGateway, onDeleteGateway } = gatewayStr;
  const onAction = useCallback((row: IGateway, action: (row: IGateway) => void) => () => action(row), []);

  return (
    <>
      {gatewayStr.items.map((row) => (
        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            {row.serial}
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell align="center">{row.ip}</TableCell>
          <TableCell align="center">{row.peripherals}</TableCell>
          <TableActions onEdit={onAction(row, onEditGateway)} onDelete={onAction(row, onDeleteGateway)} />
        </TableRow>
      ))}
    </>
  );
});
