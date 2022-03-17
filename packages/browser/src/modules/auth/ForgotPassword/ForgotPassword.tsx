import React, { FC, FormEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';

import { InputChangeHandler } from 'types/types';
import { useForgotPasswordMutation } from './useForgotPasswordMutation';
import { AsyncButton } from 'ui/Button';
import Feedback from 'ui/Feedback';
import Form from 'ui/Form';
import Input from 'ui/Input';
import { IntroView } from 'ui/View';
import { AuthControls, AuthHeader } from 'modules/auth/components';

const ResetPassword: FC = () => {
  const [email, setEmail] = useState('');
  const [forgotPassword, { data, error, loading }] =
    useForgotPasswordMutation();

  const handleEmailChange: InputChangeHandler = event => {
    setEmail(event.target.value);
  };

  const handleForgotPassword = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (!email) {
      return;
    }

    await forgotPassword({
      variables: { email },
    });
  };

  const isSuccess = data && !error && !loading;

  return (
    <IntroView>
      <Box sx={{ width: '100%' }}>
        <AuthHeader>
          <FormattedMessage id="auth.header.forgot-password" />
        </AuthHeader>
        {isSuccess ? (
          <Feedback
            message={
              <FormattedMessage
                id="password.reset.link-sent"
                values={{ email }}
              />
            }
            severity="success"
          />
        ) : (
          <Form autoComplete="off" onSubmit={handleForgotPassword}>
            <AuthControls>
              <Input
                autoComplete="off"
                label={<FormattedMessage id="email" />}
                onChange={handleEmailChange}
                type="email"
                value={email}
              />
              <AsyncButton loading={loading} type="submit">
                <FormattedMessage id="password.reset" />
              </AsyncButton>
              {error && (
                <Feedback message={<FormattedMessage id="error.general" />} />
              )}
            </AuthControls>
          </Form>
        )}
      </Box>
    </IntroView>
  );
};

export default ResetPassword;
