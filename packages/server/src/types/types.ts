import { Request, Response } from 'express';

import User from 'modules/user/entity';

export type Locale = 'en' | 'pl';

export interface Context {
  req: Request;
  res: Response;
  user?: User;
}
