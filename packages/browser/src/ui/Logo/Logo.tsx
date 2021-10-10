import React, { FC } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import { HorizontalLogo, SimpleLogo, VerticalLogo } from './IconLogo';

type LogoVariant = 'simple' | 'horizontal' | 'vertical';

type LogoSize = 'small' | 'medium' | 'big' | 'large';

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
}

const LogoBox = styled.div`
  display: inline-block;
  width: auto;
  margin: ${({ theme }) => theme.mixins.size(1)};

  &.small,
  &.small svg {
    height: ${({ theme }) => theme.mixins.size(3)};
  }

  &.medium,
  &.medium svg {
    height: ${({ theme }) => theme.mixins.size(6)};
  }

  &.big,
  &.big svg {
    height: ${({ theme }) => theme.mixins.size(9)};
  }

  &.large,
  &.large svg {
    height: ${({ theme }) => theme.mixins.size(12)};
  }
`;

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
    large: size === 'large'
  });

  return (
    <LogoBox className={classes}>
      <LogoComponent />
    </LogoBox>
  );
};

export default Logo;
