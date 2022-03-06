import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

const AuthControlsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '320px',
  margin: '0 auto',

  '& > *:not(:last-child)': {
    marginBottom: theme.spacing(1),
  },
}));

const AuthControls: FC<BoxProps> = ({ children, ...props }) => (
  <AuthControlsBox {...props}>{children}</AuthControlsBox>
);

export default AuthControls;
