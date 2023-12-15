export type MethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS';

export type ReqOptionType<INPUT> = {
  data?: INPUT;
  headers?: Record<string, any>;
  timeout?: number;
  revalidate?: number;
};
