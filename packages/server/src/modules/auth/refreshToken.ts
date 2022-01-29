import { Request, Response, RequestHandler } from 'express';

import User from 'modules/user/entity/userEntity';
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from './sign';
import { sendRefreshToken } from './sendTokenCookie';

export const refreshToken: RequestHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      throw new Error('not Authorized');
    }

    const payload = verifyRefreshToken(refreshToken);

    const { userId, tokenVersion } = payload;

    const user = await User.findOne({ id: userId });

    if (!user) {
      throw new Error('not Authorized');
    }

    const { id, tokenVersion: dbTokenVersion } = user;

    if (tokenVersion !== dbTokenVersion) {
      throw new Error('not Authorized');
    }

    sendRefreshToken(res, createRefreshToken(id, dbTokenVersion));

    return res.send({ accessToken: createAccessToken(id) });
  } catch (error) {
    return res.sendStatus(401);
  }
};

export default refreshToken;
