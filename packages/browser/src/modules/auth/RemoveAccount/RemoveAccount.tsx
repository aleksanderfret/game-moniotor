import React, { FC, FormEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { useRemoveAccountMutation } from './useRemoveAccountMutation';
import { InputChangeHandler } from 'types';
import { AsyncButton } from 'ui/Button';

const RemoveAccount: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [removeAccount, { data, error, loading }] = useRemoveAccountMutation();

  const handleEmailChange: InputChangeHandler = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange: InputChangeHandler = event => {
    setPassword(event.target.value);
  };

  const handleRemoveAccount = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    await removeAccount({ variables: { email, password } });
  };

  const success = data && !error && !loading;

  return success ? (
    <div>
      <p>
        <FormattedMessage
          id="auth.remove-account.link-sent"
          values={{ email }}
        />
      </p>
    </div>
  ) : (
    <form onSubmit={handleRemoveAccount}>
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
        <AsyncButton loading={loading} type="submit">
          <FormattedMessage id="auth.remove-account" />
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

export default RemoveAccount;
