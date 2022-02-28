import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { ButtonOnClickHandler } from 'types/types';
import { Path } from 'router';
import Button from 'ui/Button/Button';
import { AuthControls } from 'modules/auth/components';

const AuthIntro: FC = () => {
  const navigate = useNavigate();

  const handleNavigate =
    (path: string): ButtonOnClickHandler =>
    () => {
      navigate(path);
    };

  return (
    <AuthControls>
      <Button onClick={handleNavigate(Path.SignIn)}>
        <FormattedMessage id="sign-in" />
      </Button>
      <Button onClick={handleNavigate(Path.SignUp)} secondary>
        <FormattedMessage id="sign-up" />
      </Button>
    </AuthControls>
  );
};

export default AuthIntro;
