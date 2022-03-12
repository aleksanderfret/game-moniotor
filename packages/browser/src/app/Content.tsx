import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import MuiBox from '@mui/material/Box';

import { Path } from 'router';
import Dashboard from 'modules/dashboard';
import Account from 'modules/user/Account';
import { CreateGame, Game, Games } from 'modules/games';
import { Play, Plays } from 'modules/plays';
import { Event, Events } from 'modules/events';
import { Tool, Tools } from 'modules/tools';
import BottomNavigation from 'ui/BottomNavigation/BottomNavigation';

const Box = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  minWidth: '100vw',
  backgroundColor: theme.palette.background.default,
}));

const Content: FC = () => (
  <Box>
    <Routes>
      <Route element={<Dashboard />} path={Path.Dashboard} />
      <Route element={<Account />} path={Path.Account} />
      <Route element={<Game />} path={Path.Game} />
      <Route element={<Games />} path={Path.Games} />
      <Route element={<CreateGame />} path={Path.NewGame} />
      <Route element={<Play />} path={Path.Play} />
      <Route element={<Plays />} path={Path.Plays} />
      <Route element={<Event />} path={Path.Event} />
      <Route element={<Events />} path={Path.Events} />
      <Route element={<Tool />} path={Path.Tool} />
      <Route element={<Tools />} path={Path.Tools} />
      <Route element={<Dashboard />} path="*" />
    </Routes>
    <BottomNavigation />
  </Box>
);
export default Content;
