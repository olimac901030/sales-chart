import { GatewayWrapper } from './components/GatewayWrapper';
import { GatewayFields } from '#gateway/components/GatewayForm/components/GatewayFields';

export const GatewayForm = function () {
  return (
    <GatewayWrapper>
      <GatewayFields />
    </GatewayWrapper>
  );
};
