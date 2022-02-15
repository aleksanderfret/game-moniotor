import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { ButtonOnClickHandler } from 'types/types';
import { Path } from 'router';
import Button from 'ui/Button/Button';

const Home: FC = () => {
  const navigate = useNavigate();

  const handleNavigate =
    (path: string): ButtonOnClickHandler =>
    () => {
      navigate(path);
    };

  return (
    <ul>
      <li>
        <Button onClick={handleNavigate(Path.SignIn)}>
          <FormattedMessage id="sign-in" />
        </Button>
      </li>
      <li>
        <Button onClick={handleNavigate(Path.SignUp)} secondary>
          <FormattedMessage id="sign-up" />
        </Button>
      </li>
    </ul>
  );
};

export default Home;
