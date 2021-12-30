import React, { FC } from 'react';
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

import Logo from 'ui/Logo';
import Tile from 'ui/Tile';
import Home from 'modules/home';
import {
  ForgotPassword,
  RemoveAccountConfirmation,
  ResetPassword,
  SignIn,
  SignUp,
  SignUpConfirmation
} from 'modules/auth';
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
    <Routes>
      <Route element={<Home />} path={Path.Home} />
      <Route element={<SignIn />} path={Path.SignIn} />
      <Route element={<SignUp />} path={Path.SignUp} />
      <Route element={<SignUpConfirmation />} path={Path.SignUpConfirmation} />
      <Route element={<ForgotPassword />} path={Path.ForgotPassword} />
      <Route
        element={<RemoveAccountConfirmation />}
        path={Path.RemoveAccountConfirmation}
      />
      <Route element={<ResetPassword />} path={Path.ResetPassword} />
      <Route element={<Home />} path="*" />
    </Routes>
    <div>© 2021 Apps First</div>
  </IntroBox>
);
export default Intro;
