import { PeripheralRepository } from '$repo/peripheral.repository';
import { IPeripheral } from '~/peripheral.type';
import { gatewayCtrl } from '$ctrl/gateways.controller';

export class PeripheralController {
  getPeripheralByUID = async (uid: string): Promise<IPeripheral | null> => PeripheralRepository.findByUID(uid);

  add = async (peripheral: IPeripheral) => {
    await gatewayCtrl.validateGatewayCount(String(peripheral.gateway));
    return PeripheralRepository.create(peripheral);
  };

  getAll = async (gateway: string) => PeripheralRepository.read(gateway);
  remove = async (id: string) => PeripheralRepository.remove(id);
  removeByGateway = async (gatewayId: string) => PeripheralRepository.removeByGateway(gatewayId);
  update = async (id: string, data: IPeripheral) => PeripheralRepository.update(id, data);
}

export const peripheralCtrl = new PeripheralController();
