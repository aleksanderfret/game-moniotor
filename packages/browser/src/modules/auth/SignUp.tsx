import React, { FC, FormEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { InputChangeHandler } from 'types';
import { AsyncButton } from 'ui/Button';
import useSignUp from './useSignUp';

const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [policy, setPolicy] = useState(false);
  const { mutate: signUp, error, isError, isLoading, isSuccess } = useSignUp();

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
      email,
      password,
      passwordConfirmation,
      policy: new Date()
    });
  };

  return isSuccess ? (
    <div>
      <FormattedMessage
        id="sign-up.success.message"
        values={{
          email
        }}
      />
    </div>
  ) : (
    <form onSubmit={handleSignUp}>
      <div>
        <label>
          <FormattedMessage id="email" />
          <input
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
            onChange={handlePolicyAcceptanceChange}
            type="checkbox"
          />
        </label>
      </div>
      <div>
        <AsyncButton loading={isLoading} type="submit">
          <FormattedMessage id="sign-up" />
        </AsyncButton>
      </div>
      {isError && (
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
