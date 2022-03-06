import React, { FC, FormEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { AuthControls, AuthHeader } from 'modules/auth/components';
import { InputChangeHandler } from 'types/types';
import { AsyncButton } from 'ui/Button';
import { useSignUpMutation } from './useSignUpMutation';
import Input from 'ui/Input';
import Checkbox from 'ui/Checkbox';
import Form from 'ui/Form';
import Feedback from 'ui/Feedback';

const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [policy, setPolicy] = useState(false);
  const [signUp, { data, error, loading }] = useSignUpMutation();

  const handleEmailChange: InputChangeHandler = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange: InputChangeHandler = event => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange: InputChangeHandler = event => {
    setPasswordConfirmation(event.target.value);
  };

  const handlePolicyAcceptanceChange: InputChangeHandler = () => {
    setPolicy(policy => !policy);
  };

  const handleSignUp = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (
      !email ||
      !password ||
      !policy ||
      !passwordConfirmation ||
      password !== passwordConfirmation
    ) {
      return;
    }

    await signUp({
      variables: {
        email,
        password,
        passwordConfirmation,
        policy: new Date().toISOString(),
      },
    });
  };

  const isSuccess = data && !error && !loading;

  return (
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
            <Checkbox
              checked={policy}
              disabled={loading}
              label={<FormattedMessage id="policy.acceptance" />}
              onChange={handlePolicyAcceptanceChange}
            />
            <AsyncButton loading={loading} type="submit">
              <FormattedMessage id="sign-up" />
            </AsyncButton>
          </AuthControls>
          {error && <Feedback message={error.message} />}
        </Form>
      )}
    </div>
  );
};

export default SignUp;
