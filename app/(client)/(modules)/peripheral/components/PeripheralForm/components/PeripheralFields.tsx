import { Input } from '@field/Input';
import { Grid } from '@ui/index';
import { Select } from '@field/Select';
import { PeripheralStatus } from '~/peripheralStatus.type';

const PERIPHERAL_STATUS_OPTIONS = Object.entries(PeripheralStatus).map(([label, value]) => ({ label, value }));

export const PeripheralFields = function () {
  return (
    <Grid gridTemplateColumns="auto" gap="1.5rem" position="relative">
      <Input name="uid" label="UID" />
      <Input name="vendor" label="Vendor" />
      <Select name="status" label="Status" options={PERIPHERAL_STATUS_OPTIONS} />
    </Grid>
  );
};
