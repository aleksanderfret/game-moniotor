import React, { FC, RefObject } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeaderProps extends TypographyProps {
  level?: HeaderLevel;
  ref?:
    | ((instance: HTMLHeadingElement | null) => void)
    | RefObject<HTMLHeadingElement>
    | null
    | undefined;
}

const Header: FC<HeaderProps> = ({ children, level = 1, ...props }) => (
  <Typography component={`h${level}`} {...props}>
    {children}
  </Typography>
);
export default Header;
