import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';

import { ButtonOnClickHandler } from 'types/types';
import { Path } from 'router';
import Button from 'ui/Button/Button';
import { AuthControls, AuthHeader } from 'modules/auth/components';

const AuthIntro: FC = () => {
  const navigate = useNavigate();

  const handleNavigate =
    (path: string): ButtonOnClickHandler =>
    () => {
      navigate(path);
    };

  return (
    <Box sx={{ width: '100%' }}>
      <AuthHeader>
        <FormattedMessage id="auth.header.intro" />
      </AuthHeader>
      <AuthControls>
        <Button onClick={handleNavigate(Path.SignIn)}>
          <FormattedMessage id="sign-in" />
        </Button>
        <Button onClick={handleNavigate(Path.SignUp)} secondary>
          <FormattedMessage id="sign-up" />
        </Button>
      </AuthControls>
    </Box>
  );
};

export default AuthIntro;
