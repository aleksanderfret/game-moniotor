import React, { FC } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';

import { HorizontalLogo, SimpleLogo, VerticalLogo } from './IconLogo';

type LogoVariant = 'simple' | 'horizontal' | 'vertical';

type LogoSize = 'small' | 'medium' | 'big' | 'large';

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
}

const LogoBox = styled('div')(({ theme }) => ({
  display: 'inline-block',
  width: 'auto',
  margin: theme.spacing(1),

  '&.small, &.small svg': {
    height: theme.utils.size(3),
  },

  '&.medium, &.medium svg': {
    height: theme.utils.size(6),
  },

  '&.big, &.big svg': {
    height: theme.utils.size(9),
  },

  '&.large, &.large svg': {
    height: theme.utils.size(12),
  },
}));

const setLogoComponent = (variant: LogoVariant): FC => {
  switch (variant) {
    case 'simple':
      return SimpleLogo;
    case 'horizontal':
      return HorizontalLogo;
    case 'vertical':
      return VerticalLogo;
    default:
      return SimpleLogo;
  }
};

const Logo: FC<LogoProps> = ({ size = 'small', variant = 'simple' }) => {
  const LogoComponent = setLogoComponent(variant);

  const classes = clsx({
    small: size === 'small',
    medium: size === 'medium',
    big: size === 'big',
    large: size === 'large',
  });

  return (
    <LogoBox className={classes}>
      <LogoComponent />
    </LogoBox>
  );
};

export default Logo;
