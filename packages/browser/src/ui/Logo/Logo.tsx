import React, { FC } from 'react';
import styled from 'styled-components';

import { HorizontalLogo, SimpleLogo, VerticalLogo } from './IconLogo';

type LogoVariant = 'simple' | 'horizontal' | 'vertical';

type LogoSize = 'small' | 'medium' | 'big' | 'large';

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
}

interface LogoBoxProps {
  sizeFactor: number;
}

const LogoBox = styled.div<LogoBoxProps>`
  display: inline-block;
  width: auto;
  height: ${({ sizeFactor, theme }) => theme.mixins.size(sizeFactor)};
  margin: ${({ theme }) => theme.mixins.size(1)};

  svg {
    height: ${({ sizeFactor, theme }) => theme.mixins.size(sizeFactor)};
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

const setSizeFactor = (size: LogoSize): number => {
  switch (size) {
    case 'small':
      return 3;
    case 'medium':
      return 6;
    case 'big':
      return 9;
    case 'large':
      return 12;
    default:
      return 3;
  }
};

const Logo: FC<LogoProps> = ({ size = 'small', variant = 'simple' }) => {
  const LogoComponent = setLogoComponent(variant);

  return (
    <LogoBox data-testid="logo" sizeFactor={setSizeFactor(size)}>
      <LogoComponent />
    </LogoBox>
  );
};

export default Logo;
