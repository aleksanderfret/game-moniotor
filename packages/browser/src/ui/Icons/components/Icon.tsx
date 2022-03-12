import React, { FC } from 'react';
import MuiSvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';

type Icon = {
  filled?: boolean;
};

const StyledIcon = styled(MuiSvgIcon)(({ filled }: Icon) => ({
  fill: filled ? 'currentColor' : 'none',
  stroke: filled ? 'none' : 'currentColor',
  strokeWidth: filled ? 0 : 0.6,
}));

export type SvgIcon = FC<SvgIconProps<'svg', {}> & Icon>;

const Icon: SvgIcon = ({ filled = false, ...props }) => (
  <StyledIcon
    fill={filled ? 'currentColor' : 'none'}
    height="24"
    role="img"
    stroke={filled ? 'none' : 'currentColor'}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={filled ? 0 : 0.5}
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
);

export default Icon;
