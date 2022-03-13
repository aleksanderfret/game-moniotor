import React, { FC } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';

import {
  HorizontalLogo,
  MixedLogo,
  SimpleLogo,
  VerticalLogo,
} from './IconLogo';

type LogoVariant = 'simple' | 'horizontal' | 'mixed' | 'vertical';

type LogoSize = 'tiny' | 'small' | 'medium' | 'big' | 'large';

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  gap?: boolean;
}

const LogoBox = styled('div')<{ gap: boolean }>(({ gap, theme }) => ({
  display: 'inline-block',
  width: 'auto',
  margin: gap ? theme.spacing(1) : 0,

  '&.tiny, &.tiny svg': {
    height: theme.utils.size(2.5),
  },

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
    case 'mixed':
      return MixedLogo;
    case 'vertical':
      return VerticalLogo;
    default:
      return SimpleLogo;
  }
};

const Logo: FC<LogoProps> = ({
  size = 'small',
  variant = 'simple',
  gap = true,
}) => {
  const LogoComponent = setLogoComponent(variant);

  const classes = clsx({
    tiny: size === 'tiny',
    small: size === 'small',
    medium: size === 'medium',
    big: size === 'big',
    large: size === 'large',
  });

  return (
    <LogoBox className={classes} gap={gap}>
      <LogoComponent />
    </LogoBox>
  );
};

export default Logo;
