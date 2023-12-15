import { MethodType, ReqOptionType } from './types.service';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};

type Response<T = any> = {
  ok: boolean;
  data: T;
  error: any;
};

export async function http<INPUT = unknown, RES = INPUT>(
  url: string,
  method: MethodType,
  { data = undefined, headers = DEFAULT_HEADERS, timeout = 90, revalidate }: ReqOptionType<INPUT>
): Promise<Response<RES>> {
  let id = 0;
  try {
    const reqOptions: any = {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined
    };
    if (timeout !== -1) {
      const controller = new AbortController();
      id = Number(setTimeout(() => controller.abort(), timeout * 1000));
      reqOptions.signal = controller.signal;
    }
    if (revalidate) {
      reqOptions.next = { revalidate };
    }

    const response = await fetch(url, reqOptions);
    clearTimeout(id);
    return await response.json();
  } catch (e: any) {
    clearTimeout(id);
    return { ok: false, data: { url, method, data }, error: e } as Response<RES>;
  }
}
