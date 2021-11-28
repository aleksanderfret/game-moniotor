import React, { FC, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { setIsAuthenticated } from 'context';
import { Path } from 'router';
import { setAccessToken } from 'modules/auth/token';
import { InputChangeHandler } from 'types/types';
import { useSignInMutation } from './useSignInMutation';
import { useAppDispatch } from 'hooks';
import { AsyncButton } from 'ui/Button';

export const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, { error, loading }] = useSignInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailChange: InputChangeHandler = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange: InputChangeHandler = event => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (event: FormEvent): Promise<Boolean> => {
    event.preventDefault();

    if (!email || !password) {
      return false;
    }

    const response = await signIn({
      variables: { email, password }
    });

    if (response && response.data) {
      setAccessToken(response.data.signIn.accessToken);
      dispatch(setIsAuthenticated(true));
      navigate(Path.Dashboard);
    }

    return false;
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <div>
          <label>
            <FormattedMessage id="email" />
            <input onChange={handleEmailChange} type="text" value={email} />
          </label>
        </div>
        <div>
          <label>
            <FormattedMessage id="password" />
            <input
              onChange={handlePasswordChange}
              type="password"
              value={password}
            />
          </label>
        </div>
        <div>
          <AsyncButton loading={loading} type="submit">
            <FormattedMessage id="sign-in" />
          </AsyncButton>
        </div>
        <div>
          <Link to={Path.ForgotPassword}>
            <FormattedMessage id="password.forgot" />
          </Link>
        </div>
        {error && (
          <div>
            <FormattedMessage id="error.general" />
          </div>
        )}
      </form>
    </div>
  );
};

export default SignIn;
