import MuiSvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React, { FC } from 'react';

export type SvgIcon = FC<SvgIconProps<'svg', {}>>;

const Icon: SvgIcon = ({ children, ...props }) => (
  <MuiSvgIcon
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </MuiSvgIcon>
);

export default Icon;
