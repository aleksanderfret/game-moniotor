import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Logo from 'ui/Logo';
import Home from 'modules/home';
import {
  AuthBox,
  ForgotPassword,
  RemoveAccountConfirmation,
  ResetPassword,
  SignIn,
  SignUp,
  SignUpConfirmation,
} from 'modules/auth';
import { Path } from 'router';

const Intro: FC = () => (
  <AuthBox>
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
  </AuthBox>
);
export default Intro;
