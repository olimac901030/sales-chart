export type MethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTION';

export type ReqOptionType<INPUT> = {
  data?: INPUT;
  headers?: Record<string, any>;
  timeout?: number;
  revalidate?: number;
};
