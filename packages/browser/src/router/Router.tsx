import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { RouteAccess } from './enums';
import routes from './routes';

const privateRoutes = routes.filter(
  ({ access }) => access !== RouteAccess.Public
);

const publicRoutes = routes.filter(
  ({ access }) => access !== RouteAccess.Private
);

export const PrivateRouter: FC = () => (
  <Switch>
    {privateRoutes.map(({ component, path, exact }) => (
      <Route component={component} exact={exact} key={path} path={path} />
    ))}
  </Switch>
);

export const PublicRouter: FC = () => (
  <Switch>
    {publicRoutes.map(({ component, path, exact }) => (
      <Route component={component} exact={exact} key={path} path={path} />
    ))}
  </Switch>
);
