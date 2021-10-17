import environment from 'env/env';
import { createVerifier } from './sign';

const { TOKEN_PUBLIC_KEY } = environment;

const checkIsTokenExpired = (token: string): Boolean => {
  const { exp } = createVerifier(TOKEN_PUBLIC_KEY)(token, {
    ignoreExpiration: true
  });

  return Date.now() >= exp * 1000;
};

export default checkIsTokenExpired;
