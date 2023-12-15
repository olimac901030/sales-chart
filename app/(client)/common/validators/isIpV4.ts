import { isIPv4 } from 'is-ip';

export const vIsIpV4 = (v: string) => !isIPv4(v) && `Not is a valid IPv4`;
