import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

import { Path } from 'router';

const Link = styled(NavLink)(() => ({
  flexGrow: 1,
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  padding: '8px',
  boxSizing: 'border-box',
}));

export const Box = styled('div')(() => ({
  display: 'flex',
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  height: '64px',
}));

const BottomNavigation: FC = () => {
  return (
    <Box>
      <Link to={Path.Dashboard}>Home</Link>
      <Link to={Path.Games}>Games</Link>
      <Link to={Path.Plays}>Plays</Link>
      <Link to={Path.Events}>Events</Link>
      <Link to={Path.Tools}>Tools</Link>
    </Box>
  );
};

export default BottomNavigation;
