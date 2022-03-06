import React, { FC } from 'react';
import { styled } from '@mui/material/styles';

import Header from 'ui/Header';

const StyledHeader = styled(Header)(({ theme }) => ({
  fontWeight: theme.font.weight.black,
  fontStyle: 'italic',
  fontSize: theme.font.size.medium,
  marginBottom: theme.spacing(1),
}));

const AuthHeader: FC = ({ children }) => (
  <StyledHeader align="center" level={2}>
    {children}
  </StyledHeader>
);

export default AuthHeader;
