import { Table } from '@component/table/Table';
import { GatewayRows } from './GatewayRows';
import { AddGatewayBtn } from '#gateway/components/GatewayTable/AddGatewayBtn';

export function GatewayTable() {
  return (
    <Table
      title="Gateways List"
      header={['Serial', 'Name', 'IPv4', 'Peripherals', 'Actions']}
      toolBarActions={<AddGatewayBtn />}
    >
      <GatewayRows />
    </Table>
  );
}
