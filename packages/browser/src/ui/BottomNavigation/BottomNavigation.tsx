import React, { FC } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Path } from 'router';

const Link = styled(NavLink)`
  flex-grow: 1;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
`;

export const Box = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 64px;
`;

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
