import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';

import { AuthControls, AuthHeader } from 'modules/auth/components';
import { AsyncButton } from 'ui/Button';
import { useSignUpMutation } from './useSignUpMutation';
import { TextField } from 'ui/TextField';
import { Checkbox } from 'ui/Checkbox';
import { Form, FormData } from 'ui/Form';
import Feedback from 'ui/Feedback';
import { IntroView } from 'ui/View';

interface SignUpForm extends FormData {
  email: string | null;
  password: string | null;
  passwordConfirmation: string | null;
  policy: boolean;
}

const formValues: SignUpForm = {
  email: '',
  password: '',
  passwordConfirmation: '',
  policy: false,
};

const SignUp = (): JSX.Element => {
  const [signUp, { data, error, loading }] = useSignUpMutation();
  const { formatMessage } = useIntl();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      ...formValues,
    },
  });
  const handleSignUp = handleSubmit((data: SignUpForm) => {
    const { email, password, passwordConfirmation, policy } = data;

    if (
      !isValid ||
      !email ||
      !password ||
      !policy ||
      !passwordConfirmation ||
      password !== passwordConfirmation
    ) {
      return;
    }

    signUp({
      variables: {
        email,
        password,
        passwordConfirmation,
        policy: new Date().toISOString(),
      },
    });
  });

  const isSuccess = data && !error && !loading;

  return (
    <IntroView>
      <div>
        <AuthHeader>
          <FormattedMessage id="auth.header.sign-up" />
        </AuthHeader>
        {isSuccess ? (
          <Feedback
            message={<FormattedMessage id="sign-up.success.message" />}
            severity="success"
          />
        ) : (
          <Form autoComplete="off" onSubmit={handleSignUp}>
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
              <Checkbox
                control={control}
                disabled={loading}
                label={formatMessage({ id: 'policy.acceptance' })}
                name="policy"
              />
              <AsyncButton loading={loading} type="submit">
                <FormattedMessage id="sign-up" />
              </AsyncButton>
            </AuthControls>
            {error && <Feedback message={error.message} />}
          </Form>
        )}
      </div>
    </IntroView>
  );
};

export default SignUp;
