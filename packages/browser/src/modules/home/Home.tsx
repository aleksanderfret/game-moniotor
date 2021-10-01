import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Path } from 'router';

const Home: FC = () => {
  return (
    <ul>
      <li>
        <Link to={Path.SignIn}>
          <FormattedMessage id="sign-in" />
        </Link>
      </li>
      <li>
        <Link to={Path.SignUp}>
          <FormattedMessage id="sign-up" />
        </Link>
      </li>
    </ul>
  );
};

export default Home;
