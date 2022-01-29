import React, { FC, FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useResetPasswordMutation } from './useResetPasswordMutation';
import { InputChangeHandler } from 'types/types';
import { Path } from 'router';
import { AsyncButton } from 'ui/Button';

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

  const success = data && !error && !loading;

  return (
    <div>
      {success ? (
        <div>
          <p>
            <FormattedMessage id="auth.password-changed" />
          </p>
          <p>
            <Link to={Path.SignIn}>
              <FormattedMessage id="sign-in" />
            </Link>
          </p>
        </div>
      ) : (
        <form onSubmit={handleUpdatePassword}>
          <div>
            <label>
              <FormattedMessage id="email" />
              <input onChange={handleEmailChange} type="text" value={email} />
            </label>
          </div>
          <div>
            <label>
              <FormattedMessage id="password" />
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
      )}
    </div>
  );
};

export default ResetPassword;
