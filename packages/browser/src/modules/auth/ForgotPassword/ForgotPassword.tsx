import React from 'react';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';

import { useForgotPasswordMutation } from './useForgotPasswordMutation';
import { AsyncButton } from 'ui/Button';
import Feedback from 'ui/Feedback';
import { Form, FormData } from 'ui/Form';
import { TextField } from 'ui/TextField';
import { IntroView } from 'ui/View';
import { AuthControls, AuthHeader } from 'modules/auth/components';

interface ForgotPasswordForm extends FormData {
  email: string | null;
}

const formValues: ForgotPasswordForm = {
  email: '',
};

const ResetPassword = (): JSX.Element => {
  const [forgotPassword, { data, error, loading }] =
    useForgotPasswordMutation();
  const {
    handleSubmit,
    control,
    formState: { isValid },
    getValues,
  } = useForm({
    defaultValues: {
      ...formValues,
    },
  });

  const handleForgotPassword = handleSubmit((data: ForgotPasswordForm) => {
    const { email } = data;

    if (!email || !isValid) {
      return;
    }

    forgotPassword({
      variables: { email },
    });
  });

  const isSuccess = data && !error && !loading;
  const email = getValues('email');

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
              <TextField
                autoComplete="off"
                control={control}
                disabled={loading}
                label={<FormattedMessage id="email" />}
                name="email"
                type="email"
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
