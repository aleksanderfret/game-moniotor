import React, { FC, FormEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { InputChangeHandler } from 'types/types';
import { useForgotPasswordMutation } from './useForgotPasswordMutation';
import { AsyncButton } from 'ui/Button';

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

  const success = data && !error && !loading;

  return (
    <div>
      {success ? (
        <div>
          <p>
            <FormattedMessage
              id="password.reset.link-sent"
              values={{ email }}
            />
          </p>
        </div>
      ) : (
        <form onSubmit={handleForgotPassword}>
          <div>
            <label>
              <FormattedMessage id="email" />
              <input onChange={handleEmailChange} type="text" value={email} />
            </label>
          </div>
          <div>
            <AsyncButton loading={loading} type="submit">
              <FormattedMessage id="password.reset" />
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
