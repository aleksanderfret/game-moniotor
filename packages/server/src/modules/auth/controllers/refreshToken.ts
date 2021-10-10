import { Request, Response, RequestHandler } from 'express';

import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken
} from 'modules/auth/sign';
import { sendRefreshToken } from 'modules/auth/sendTokenCookie';
import User from 'modules/user/entity';

const refreshToken: RequestHandler = async (
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
    // console.error(error);

    //return res.send({ accessToken: '' });
    return res.sendStatus(401);
  }
};

export default refreshToken;
