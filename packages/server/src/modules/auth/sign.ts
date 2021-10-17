import { sign, verify, VerifyOptions } from 'jsonwebtoken';
import { randomBytes } from 'crypto';

import environment from 'env/env';

const {
  ACCESS_PRIVATE_KEY,
  ACCESS_PUBLIC_KEY,
  ACCESS_TOKEN_EXP,
  REFRESH_PRIVATE_KEY,
  REFRESH_PUBLIC_KEY,
  REFRESH_TOKEN_EXP,
  TOKEN_PRIVATE_KEY,
  TOKEN_PUBLIC_KEY
} = environment;

export interface JwtPayload {
  exp: number;
  iat: number;
  jwtid: string;
  userId: string;
  tokenVersion?: number;
}

type Signer = (id: string, tokenVersion?: number) => string;

type Verifier = (token: string, options?: VerifyOptions) => JwtPayload;

export const createSigner =
  (key: string) =>
  (expiration: number): Signer =>
  (id: string, tokenVersion?: number) => {
    const jwtid = randomBytes(32).toString('hex');
    const iat = Math.floor(new Date().getTime() / 1000);
    const exp = iat + expiration;
    const privateKey = Buffer.from(key, 'base64').toString('utf-8');

    const payload = { exp, iat, jwtid, userId: id } as JwtPayload;

    if (tokenVersion !== undefined) {
      payload.tokenVersion = tokenVersion;
    }

    return sign(payload, privateKey, { algorithm: 'RS256', jwtid });
  };

export const createVerifier =
  (key: string): Verifier =>
  (token: string, options?: VerifyOptions) => {
    const publicKey = Buffer.from(key, 'base64').toString('utf-8');

    const payload = verify(token, publicKey, options);

    return payload as JwtPayload;
  };

export const createAccessToken =
  createSigner(ACCESS_PRIVATE_KEY)(ACCESS_TOKEN_EXP);

export const createRefreshToken =
  createSigner(REFRESH_PRIVATE_KEY)(REFRESH_TOKEN_EXP);

export const createToken = createSigner(TOKEN_PRIVATE_KEY);

export const verifyAccessToken = createVerifier(ACCESS_PUBLIC_KEY);

export const verifyRefreshToken = createVerifier(REFRESH_PUBLIC_KEY);

export const verifyToken = createVerifier(TOKEN_PUBLIC_KEY);
