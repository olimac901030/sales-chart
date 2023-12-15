import { PropsWithChildren, useId } from 'react';
import { Stack, Table as Sheet, TableBody, TableCell, TableHead, TableRow } from '@ui/index';
import { TableContainer } from '@component/layouts/TableContainer';
import { ITitleBar, TitleBar } from '@component/layouts/TitleBar';

type ITablePropsBase = ITitleBar & PropsWithChildren;

export interface ITableProps extends ITablePropsBase {
  header: string[];
}

export function Table({ title, header, children, toolBarActions = <></> }: ITableProps) {
  const id = useId();
  return (
    <Stack position="relative">
      <TitleBar title={title} toolBarActions={toolBarActions} />
      <TableContainer>
        <Sheet aria-label="sheet table">
          <TableHead>
            <TableRow>
              {header.map((name) => (
                <TableCell key={`${id}_${name}`} align="center">
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Sheet>
      </TableContainer>
    </Stack>
  );
}
