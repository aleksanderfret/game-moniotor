import React, { FC, FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';

import { useResetPasswordMutation } from './useResetPasswordMutation';
import { InputChangeHandler } from 'types/types';
import { Path } from 'router';
import { AsyncButton } from 'ui/Button';
import Feedback from 'ui/Feedback';
import Form from 'ui/Form';
import Input from 'ui/Input';
import { IntroView } from 'ui/View';
import { AuthControls, AuthHeader } from 'modules/auth/components';

interface RouteParams {
  tokenId: string;
}

const ResetPassword: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [resetPassword, { data, error, loading }] = useResetPasswordMutation({
    onCompleted: () => {
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    },
  });
  const { tokenId } = useParams<keyof RouteParams>();

  const handleEmailChange: InputChangeHandler = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange: InputChangeHandler = event => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange: InputChangeHandler = event => {
    setPasswordConfirmation(event.target.value);
  };

  const handleUpdatePassword = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (
      !email ||
      !password ||
      !passwordConfirmation ||
      password !== passwordConfirmation
    ) {
      return;
    }

    await resetPassword({
      variables: { tokenId, email, password, passwordConfirmation },
    });
  };

  const isSuccess = data && !error && !loading;

  return (
    <IntroView>
      <Box sx={{ width: '100%' }}>
        <AuthHeader>
          <FormattedMessage id="auth.header.reset-password" />
        </AuthHeader>
        {isSuccess ? (
          <>
            <Feedback
              message={<FormattedMessage id="auth.password-changed" />}
              severity="success"
            />
            <p>
              <Link to={Path.SignIn}>
                <FormattedMessage id="sign-in" />
              </Link>
            </p>
          </>
        ) : (
          <Form autoComplete="off" onSubmit={handleUpdatePassword}>
            <AuthControls>
              <Input
                autoComplete="off"
                disabled={loading}
                label={<FormattedMessage id="email" />}
                onChange={handleEmailChange}
                type="email"
                value={email}
              />
              <Input
                autoComplete="off"
                disabled={loading}
                label={<FormattedMessage id="password" />}
                onChange={handlePasswordChange}
                type="password"
                value={password}
              />
              <Input
                autoComplete="off"
                disabled={loading}
                label={<FormattedMessage id="password.confirm" />}
                onChange={handlePasswordConfirmationChange}
                type="password"
                value={passwordConfirmation}
              />
              <AsyncButton loading={loading} type="submit">
                <FormattedMessage id="save" />
              </AsyncButton>
            </AuthControls>
            {error && (
              <Feedback message={<FormattedMessage id="error.general" />} />
            )}
          </Form>
        )}
      </Box>
    </IntroView>
  );
};

export default ResetPassword;
