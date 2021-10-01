import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Path } from 'router';
import Dashboard from 'modules/dashboard';

const Content: FC = () => {
  return (
    <div>
      <Switch>
        <Route component={Dashboard} exact path={Path.Dashboard} />
      </Switch>
    </div>
  );
};

export default Content;
