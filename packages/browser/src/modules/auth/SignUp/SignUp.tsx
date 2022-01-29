import React, { FC, FormEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { InputChangeHandler } from 'types/types';
import { AsyncButton } from 'ui/Button';
import { useSignUpMutation } from './useSignUpMutation';

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

  return isSuccess ? (
    <div>
      <FormattedMessage
        id="sign-up.success.message"
        values={{
          email,
        }}
      />
    </div>
  ) : (
    <form onSubmit={handleSignUp}>
      <div>
        <label>
          <FormattedMessage id="email" />
          <input
            disabled={loading}
            onChange={handleEmailChange}
            type="text"
            value={email}
          />
        </label>
      </div>
      <div>
        <label>
          <FormattedMessage id="password" />
          <input
            disabled={loading}
            onChange={handlePasswordChange}
            type="password"
            value={password}
          />
        </label>
      </div>
      <div>
        <label>
          <FormattedMessage id="password.confirm" />
          <input
            disabled={loading}
            onChange={handlePasswordConfirmationChange}
            type="password"
            value={passwordConfirmation}
          />
        </label>
      </div>
      <div>
        <label>
          <FormattedMessage id="policy.acceptance" />
          <input
            checked={policy}
            disabled={loading}
            onChange={handlePolicyAcceptanceChange}
            type="checkbox"
          />
        </label>
      </div>
      <div>
        <AsyncButton loading={loading} type="submit">
          <FormattedMessage id="sign-up" />
        </AsyncButton>
      </div>
      {error && (
        <>
          <div>
            <FormattedMessage id="error.general" />
          </div>
          {error && error.message && <div>{error.message}</div>}
        </>
      )}
    </form>
  );
};

export default SignUp;
