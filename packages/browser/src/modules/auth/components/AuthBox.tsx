import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';

const Intro = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  maxWidth: '480px',
  margin: 'auto',
  padding: theme.spacing(1),

  '& > *:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
}));

const AuthBox: FC<PaperProps> = ({ children, ...props }) => (
  <Intro elevation={0} {...props}>
    {children}
  </Intro>
);

export default AuthBox;
