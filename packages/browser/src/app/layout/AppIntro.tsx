import React, { FC } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Logo from 'app/ui/Logo';
import Tile from 'app/ui/Tile';
import Home from 'app/home';
import { SignIn, SignUp } from 'app/auth';
import { Path } from 'router';

const Intro = styled(Tile)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin: auto;
`;

const AppIntro: FC = () => (
  <Intro>
    <h1>
      <Logo size="medium" variant="vertical" />
    </h1>
    <Switch>
      <Route component={Home} exact path={Path.Home} />
      <Route component={SignIn} exact path={Path.SignIn} />
      <Route component={SignUp} exact path={Path.SignUp} />
    </Switch>
  </Intro>
);

export default AppIntro;
