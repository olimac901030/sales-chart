import { PeripheralWrapper } from './components/PeripheralWrapper';
import { PeripheralFields } from '#peripheral/components/PeripheralForm/components/PeripheralFields';

export const PeripheralForm = function () {
  return (
    <PeripheralWrapper>
      <PeripheralFields />
    </PeripheralWrapper>
  );
};
