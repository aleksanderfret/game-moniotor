import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import Copyright from 'ui/Copyright';
import Logo from 'ui/Logo';
import { AuthBox } from 'modules/auth/components';
import { Path } from 'router';

const Container = styled(Box)({
  position: 'relative',
  minWidth: '100vw',
  minHeight: '100vh',
  display: 'flex',
});

const IntroView: FC = ({ children }) => (
  <Container>
    <AuthBox>
      <h1>
        <Link to={Path.Home}>
          <Logo size="medium" variant="vertical" />
        </Link>
      </h1>
      {children}
      <Copyright />
    </AuthBox>
  </Container>
);
export default IntroView;
