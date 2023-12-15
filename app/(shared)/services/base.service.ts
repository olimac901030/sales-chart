import { http } from './request.service';
import { MethodType, ReqOptionType } from './types.service';

export function serviceRestFactory(base: string) {
  function factoryRequestMethod(method: MethodType) {
    return async <RES, INPUT = RES>(url: string, options: ReqOptionType<INPUT> = {}) =>
      http<INPUT, RES>(`${base}${url}`, method, options);
  }

  return {
    get: factoryRequestMethod('GET'),
    patch: factoryRequestMethod('PATCH'),
    post: factoryRequestMethod('POST'),
    put: factoryRequestMethod('PUT'),
    remove: factoryRequestMethod('DELETE')
  };
}
