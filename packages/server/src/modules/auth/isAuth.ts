import { RequestHandler } from 'express';

import User from 'modules/user/entity';
import { verifyAccessToken } from './sign';
import { Status } from 'modules/auth/enums';

export const isAuth: RequestHandler = async (req, res, next) => {
  const { headers } = req;

  const { authorization } = headers;

  if (!authorization) {
    throw new Error('not Authorized');
  }

  try {
    const [, token] = authorization.split(' ');

    const payload = verifyAccessToken(token);

    const { userId } = payload;

    const user = await User.findOne({
      id: userId,
      status: Status.Active
    });

    if (user) {
      req.user = user;
    }
  } catch (error) {
    throw new Error('not Authorized');
  }

  return next();
};
