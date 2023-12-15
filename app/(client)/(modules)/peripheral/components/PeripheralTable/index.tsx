import { Table } from '@component/table/Table';
import { PeripheralRows } from './PeripheralRows';
import { AddPeripheralBtn } from '#peripheral/components/PeripheralTable/AddPeripheralBtn';

export function PeripheralTable() {
  return (
    <Table
      title="Peripherals List"
      header={['UID', 'Vendor', 'Status', 'Date created', 'Actions']}
      toolBarActions={<AddPeripheralBtn />}
    >
      <PeripheralRows />
    </Table>
  );
}
