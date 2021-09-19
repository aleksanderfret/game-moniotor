import { RequestHandler } from 'express';

import { Crud } from 'enums/enums';

export type Route = {
  handlers: Array<RequestHandler>;
  method: Crud;
  path: string;
};

export type Routes = Array<Route>;

export type Locale = 'en' | 'pl';
