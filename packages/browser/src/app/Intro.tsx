import React, { FC } from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';

import Logo from 'ui/Logo';
import Tile from 'ui/Tile';
import Home from 'modules/home';
import { SignIn, SignUp, SignUpConfirmation } from 'modules/auth';
import { Path } from 'router';

const IntroBox = styled(Tile)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin: auto;
`;

const Intro: FC = () => (
  <IntroBox>
    <h1>
      <Link to={Path.Home}>
        <Logo size="medium" variant="vertical" />
      </Link>
    </h1>
    <Switch>
      <Route component={Home} exact path={Path.Home} />
      <Route component={SignIn} exact path={Path.SignIn} />
      <Route component={SignUp} exact path={Path.SignUp} />
      <Route
        component={SignUpConfirmation}
        exact
        path={Path.SignUpConfirmation}
      />
    </Switch>
    <div>© 2021 Apps First</div>
  </IntroBox>
);

export default Intro;
