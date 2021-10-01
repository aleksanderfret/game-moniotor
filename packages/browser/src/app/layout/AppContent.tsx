import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Path } from 'router';
import Dashboard from 'app/dashboard';

const AppContent: FC = () => {
  return (
    <div>
      <Switch>
        <Route component={Dashboard} exact path={Path.Dashboard} />
      </Switch>
    </div>
  );
};

export default AppContent;
