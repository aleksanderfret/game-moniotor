import React, { FC, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { setIsAuthenticated } from 'context';
import { Path } from 'router';
import { setAccessToken } from 'modules/auth/token';
import { AuthControls, AuthHeader } from 'modules/auth/components';
import { InputChangeHandler } from 'types/types';
import { useSignInMutation } from './useSignInMutation';
import { useAppDispatch } from 'hooks';
import { AsyncButton } from 'ui/Button';
import Input from 'ui/Input';
import Form from 'ui/Form';
import { IntroView } from 'ui/View';
import Feedback from 'ui/Feedback';

export const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, { error, loading }] = useSignInMutation({
    onCompleted: data => {
      setAccessToken(data.signIn.accessToken);
      dispatch(setIsAuthenticated(true));
      navigate(Path.Home);
    },
  });

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

    await signIn({ variables: { email, password } });

    return false;
  };

  return (
    <IntroView>
      <Form onSubmit={handleSignIn}>
        <AuthHeader>
          <FormattedMessage id="auth.header.sign-in" />
        </AuthHeader>
        <AuthControls>
          <Input
            label={<FormattedMessage id="email" />}
            onChange={handleEmailChange}
            type="email"
            value={email}
          />
          <Input
            label={<FormattedMessage id="password" />}
            onChange={handlePasswordChange}
            type="password"
            value={password}
          />
          <AsyncButton loading={loading} type="submit">
            <FormattedMessage id="sign-in" />
          </AsyncButton>
          <div>
            <Link to={Path.ForgotPassword}>
              <FormattedMessage id="password.forgot" />
            </Link>
          </div>
          {error && (
            <Feedback message={<FormattedMessage id="error.general" />} />
          )}
        </AuthControls>
      </Form>
    </IntroView>
  );
};

export default SignIn;
