import { MiddlewareFn } from 'type-graphql';

import User from 'modules/user/entity/userEntity';
import { verifyAccessToken } from './sign';
import { Status } from 'modules/user/enums';
import { Context } from 'types/types';

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  const {
    req: { headers }
  } = context;

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
      context.user = user;
    }
  } catch (error) {
    throw new Error('not Authorized');
  }

  return next();
};

export default isAuth;
