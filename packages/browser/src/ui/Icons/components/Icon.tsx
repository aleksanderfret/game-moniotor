import React, { FC } from 'react';
import MuiSvgIcon, {
  SvgIconProps as MuiSvgIconProps,
} from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';

interface IconProps {
  filled?: boolean;
}

interface SvgIconProps {
  filled: number;
}

const StyledIcon = styled(MuiSvgIcon)(({ filled }: SvgIconProps) => ({
  fill: filled ? 'currentColor' : 'none',
  stroke: filled ? 'none' : 'currentColor',
  strokeWidth: filled ? 0 : 0.5,
}));

export type SvgIcon = FC<MuiSvgIconProps<'svg', {}> & IconProps>;

const Icon: SvgIcon = ({ filled = false, ...props }) => (
  <StyledIcon
    filled={filled ? 1 : 0}
    height="24"
    role="img"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
);

export default Icon;
