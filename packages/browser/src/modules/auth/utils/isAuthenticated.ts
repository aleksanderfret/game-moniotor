import { getAccessToken } from '../token';
import isTokenExpired from './isTokenExpired';

export const isAuthenticated = (): boolean => {
  const token = getAccessToken();

  return typeof token === 'string' && !isTokenExpired(token);
};

export default isAuthenticated;
