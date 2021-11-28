import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChangePassword, RemoveAccount } from 'modules/auth';

const Account: FC = () => (
  <div>
    <h2>
      <FormattedMessage id="account" />
    </h2>
    <div>
      <ChangePassword />
    </div>
    <div>
      <RemoveAccount />
    </div>
  </div>
);

export default Account;
