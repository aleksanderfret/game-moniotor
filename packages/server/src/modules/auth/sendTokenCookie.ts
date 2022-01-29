import { CookieOptions, Response } from 'express';

export const sendTokenCookie =
  (name: string, path?: string) =>
  (res: Response, token: string, options: CookieOptions = {}) =>
    res.cookie(name, token, {
      httpOnly: true,
      path,
      ...options,
    });

export const sendRefreshToken = sendTokenCookie(
  'refreshToken',
  '/api/auth/refresh-token'
);
