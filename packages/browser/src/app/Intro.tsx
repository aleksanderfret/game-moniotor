import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { AnimatedRoutes, Path } from 'router';
import {
  AuthIntro,
  ForgotPassword,
  RemoveAccountConfirmation,
  ResetPassword,
  SignIn,
  SignUp,
  SignUpConfirmation,
} from 'modules/auth';

const Intro: FC = () => (
  <AnimatedRoutes>
    <Route element={<AuthIntro />} path={Path.Home} />
    <Route element={<SignIn />} path={Path.SignIn} />
    <Route element={<SignUp />} path={Path.SignUp} />
    <Route element={<SignUpConfirmation />} path={Path.SignUpConfirmation} />
    <Route element={<ForgotPassword />} path={Path.ForgotPassword} />
    <Route
      element={<RemoveAccountConfirmation />}
      path={Path.RemoveAccountConfirmation}
    />
    <Route element={<ResetPassword />} path={Path.ResetPassword} />
    <Route element={<AuthIntro />} path="*" />
  </AnimatedRoutes>
);
export default Intro;
