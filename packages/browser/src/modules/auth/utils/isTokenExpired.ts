import jwtDecode from 'jwt-decode';

interface TokenPayload {
  exp: number;
}

const isTokenExpired = (token: string): boolean => {
  const { exp } = jwtDecode(token) as TokenPayload;

  return Date.now() >= exp * 1000;
};

export default isTokenExpired;
