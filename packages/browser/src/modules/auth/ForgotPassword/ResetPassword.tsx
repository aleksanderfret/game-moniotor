import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';

import { useResetPasswordMutation } from './useResetPasswordMutation';
import { Path } from 'router';
import { AsyncButton } from 'ui/Button';
import Feedback from 'ui/Feedback';
import { Form, FormData } from 'ui/Form';
import { TextField } from 'ui/TextField';
import { IntroView } from 'ui/View';
import { AuthControls, AuthHeader } from 'modules/auth/components';

interface ResetPasswordForm extends FormData {
  email: string | null;
  password: string | null;
  passwordConfirmation: string | null;
}
const formValues: ResetPasswordForm = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

interface RouteParams {
  tokenId: string;
}

const ResetPassword: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      ...formValues,
    },
  });

  const [resetPassword, { data, error, loading }] = useResetPasswordMutation();
  const { tokenId } = useParams<keyof RouteParams>();

  const handleUpdatePassword = handleSubmit(
    (data: Partial<ResetPasswordForm>) => {
      const { email, password, passwordConfirmation } = data;

      if (
        !isValid ||
        !email ||
        !password ||
        !passwordConfirmation ||
        password !== passwordConfirmation
      ) {
        return;
      }

      resetPassword({
        variables: { tokenId, email, password, passwordConfirmation },
      });
    }
  );

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
              <TextField
                autoComplete="off"
                control={control}
                disabled={loading}
                label={<FormattedMessage id="email" />}
                name="email"
                type="email"
              />
              <TextField
                autoComplete="off"
                control={control}
                disabled={loading}
                label={<FormattedMessage id="password" />}
                name="password"
                type="password"
              />
              <TextField
                autoComplete="off"
                control={control}
                disabled={loading}
                label={<FormattedMessage id="password.confirm" />}
                name="passwordConfirmation"
                type="password"
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
