import { TFormSaleFilters } from '~/gateway.type';
import { GatewayRepository } from '$repo/gateway.repository';
import { peripheralCtrl } from '$ctrl/peripheral.controller';

export class GatewayController {
  add = async (gateway: TFormSaleFilters) => GatewayRepository.create(gateway);
  getAll = async () => GatewayRepository.read();
  getById = async (id: string) => GatewayRepository.readById(id);
  remove = async (id: string) => {
    const removeGateway = GatewayRepository.remove(id);
    const removePeripheral = peripheralCtrl.removeByGateway(id);
    return await Promise.all([removeGateway, removePeripheral]);
  };
  update = async (id: string, data: TFormSaleFilters) => GatewayRepository.update(id, data);
  validateGatewayCount = async (id: string) => {
    const e: any = new Error(`The gateway specified is not reachable`);
    e.statusCode = 500;
    try {
      const gateway = await GatewayRepository.readById(id);
      if (!gateway) {
        e.message = `The gateway specified does not exist`;
        e.statusCode = 404;
      } else if (gateway.peripherals + 1 > 10) {
        e.message = `The gateway has reached its maximum capacity for peripherals`;
        e.statusCode = 400;
      } else {
        return gateway;
      }
    } catch (e) {
      console.log(e);
    }

    throw e;
  };
}

export const gatewayCtrl = new GatewayController();
