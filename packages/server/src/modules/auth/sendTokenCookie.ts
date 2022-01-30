import { CookieOptions, Response } from 'express';

import environment from 'env/environment';

const { IS_PROD } = environment;

const productionOptions: CookieOptions = IS_PROD
  ? {
      sameSite: true,
      secure: true,
    }
  : {};

export const sendTokenCookie =
  (name: string, path?: string) =>
  (res: Response, token: string, options: CookieOptions = {}) =>
    res.cookie(name, token, {
      httpOnly: true,
      path,
      ...productionOptions,
      ...options,
    });

export const sendRefreshToken = sendTokenCookie(
  'refreshToken',
  '/api/auth/refresh-token'
);
