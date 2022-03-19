import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Route } from 'react-router-dom';
import MuiBox from '@mui/material/Box';

import { AnimatedRoutes, Path } from 'router';
import Home from 'modules/dashboard';
import Account from 'modules/user/Account';
import { CreateGame, Game, Games } from 'modules/games';
import { Play, Plays } from 'modules/plays';
import { Event, Events } from 'modules/events';
import { Tool, Tools } from 'modules/tools';
import BottomNavigation from 'ui/BottomNavigation';
import Layout from 'ui/Layout';

const Box = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  minWidth: '100vw',
  backgroundColor: theme.palette.background.default,
}));

const Content: FC = () => (
  <Box>
    <Layout>
      <AnimatedRoutes>
        <Route element={<Home />} path={Path.Home} />
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
        <Route element={<Home />} path="*" />
      </AnimatedRoutes>
      <BottomNavigation />
    </Layout>
  </Box>
);
export default Content;
