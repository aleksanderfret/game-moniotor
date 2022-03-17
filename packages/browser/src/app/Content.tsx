import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Route, Routes, useLocation } from 'react-router-dom';
import MuiBox from '@mui/material/Box';
import { animated, easings, useTransition } from 'react-spring';

import { Path } from 'router';
import Dashboard from 'modules/dashboard';
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

const Content: FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
      position: 'absolute',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
      position: 'relative',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%,0,0)',
      position: 'absolute',
    },
    config: { duration: 750, easing: easings.easeInOutBack },
  } as const);

  return (
    <Box>
      <Layout>
        {transitions((props, item) => (
          <animated.div style={props}>
            <Routes location={item}>
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
          </animated.div>
        ))}
        <BottomNavigation />
      </Layout>
    </Box>
  );
};

export default Content;
