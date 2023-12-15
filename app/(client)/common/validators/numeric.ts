export const vNumeric = (v: number | string) => !/^\d+$/.test(String(v)) && `This field must be a number`;
