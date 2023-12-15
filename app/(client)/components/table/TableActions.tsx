import { DeleteIco, EditIco, Grid, IconButton, SxProps, TableCell, Tooltip } from '@ui/index';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

export interface ITableActions {
  onDelete?(): void;
  onEdit?(): void;
}
export interface IAction {
  onClick?(): void;
  icon: ReactNode;
  title?: string;
}

const ACTION_SX: SxProps = { p: '2px', m: '-2px', width: '28px' };

function Action({ onClick, icon, title }: IAction) {
  return (
    <Tooltip title={title}>
      <IconButton sx={ACTION_SX} onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
}
export const TableActions = observer(function ({ onDelete, onEdit }: ITableActions) {
  return (
    <TableCell>
      <Grid gridTemplateColumns="auto auto" gap="10px" justifyContent="center">
        {onEdit ? <Action icon={<EditIco color="primary" />} onClick={onEdit} title="Edit" /> : <></>}
        {onDelete ? <Action icon={<DeleteIco color="error" />} onClick={onDelete} title="Delete" /> : <></>}
      </Grid>
    </TableCell>
  );
});
