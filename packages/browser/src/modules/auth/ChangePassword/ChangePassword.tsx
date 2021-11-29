import React, { FC, FormEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { useChangePasswordMutation } from './useChangePasswordMutation';
import { InputChangeHandler } from 'types/types';
import { AsyncButton } from 'ui/Button';

const ChangePassword: FC = () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [changePassword, { data, error, loading }] = useChangePasswordMutation({
    onCompleted: () => {
      setEmail('');
      setPassword('');
      setOldPassword('');
      setPasswordConfirmation('');
    }
  });

  const handleEmailChange: InputChangeHandler = event => {
    setEmail(event.target.value);
  };

  const handleOldPasswordChange: InputChangeHandler = event => {
    setOldPassword(event.target.value);
  };

  const handlePasswordChange: InputChangeHandler = event => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange: InputChangeHandler = event => {
    setPasswordConfirmation(event.target.value);
  };

  const handleChangePassword = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (
      !email ||
      !oldPassword ||
      !password ||
      !passwordConfirmation ||
      password !== passwordConfirmation
    ) {
      return;
    }

    await changePassword({
      variables: { email, oldPassword, password, passwordConfirmation }
    });
  };

  const success = data && !error && !loading;

  return success ? (
    <div>
      <p>
        <FormattedMessage id="auth.password-changed" />
      </p>
    </div>
  ) : (
    <form onSubmit={handleChangePassword}>
      <div>
        <label>
          <FormattedMessage id="email" />
          <input onChange={handleEmailChange} type="text" value={email} />
        </label>
      </div>
      <div>
        <label>
          <FormattedMessage id="password.old" />
          <input
            onChange={handleOldPasswordChange}
            type="password"
            value={oldPassword}
          />
        </label>
      </div>
      <div>
        <label>
          <FormattedMessage id="password.new" />
          <input
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
            onChange={handlePasswordConfirmationChange}
            type="password"
            value={passwordConfirmation}
          />
        </label>
      </div>
      <div>
        <AsyncButton loading={loading} type="submit">
          <FormattedMessage id="save" />
        </AsyncButton>
      </div>
      {error && (
        <div>
          <FormattedMessage id="error.general" />
        </div>
      )}
    </form>
  );
};

export default ChangePassword;
