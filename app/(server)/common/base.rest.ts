// noinspection JSUnusedGlobalSymbols

import { NextApiRequest, NextApiResponse } from 'next/types';
import { MethodType } from '~svc/types.service';
import { connect } from '$common/db.connection';

type Rest = {
  [K in MethodType]: () => void;
};

export class BaseRest implements Rest {
  #req: NextApiRequest = undefined as unknown as NextApiRequest;
  #res: NextApiResponse = undefined as unknown as NextApiResponse;

  protected get req() {
    return this.#req;
  }

  protected get res() {
    return this.#res;
  }

  protected get method(): MethodType {
    return this.req.method as MethodType;
  }

  #notAllowed = () => this.res.status(405).json(null);

  POST = () => this.#notAllowed();
  PUT = () => this.#notAllowed();
  GET = () => this.#notAllowed();
  DELETE = () => this.#notAllowed();
  PATCH = () => this.#notAllowed();
  OPTIONS = () => this.success();

  call = async (req: NextApiRequest, res: NextApiResponse) => {
    await connect();
    this.#req = req;
    this.#res = res;
    return this[this.method]();
  };

  protected success = <T = never>(data?: T) => this.res.status(data ? 200 : 201).json({ ok: true, data });
  protected fail = (errors: any) => {
    // eslint-disable-next-line prefer-const
    let { statusCode = 400, message, code } = errors;
    let data: any = undefined;
    switch (code) {
      case 11000: {
        message = 'Duplicate error';
        data = errors.keyValue;
        break;
      }
    }
    this.res.status(statusCode).json({ error: { statusCode, message, data, code } });
  };
}
