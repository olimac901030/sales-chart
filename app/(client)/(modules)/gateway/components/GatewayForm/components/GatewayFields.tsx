import { Input } from '@field/Input';
import { Grid } from '@ui/index';
import { PeripheralLayout } from '#peripheral/index';
import { GatewayPeripherals } from '#gateway/components/GatewayForm/components/GatewayPeripherals';

export const GatewayFields = function () {
  return (
    <Grid gridTemplateColumns="auto" gap="1.5rem" position="relative">
      <Input name="name" label="Name" />
      <Input name="serial" label="Serial" />
      <Input name="ip" label="IPv4" />

      <GatewayPeripherals>
        <PeripheralLayout />
      </GatewayPeripherals>
    </Grid>
  );
};
