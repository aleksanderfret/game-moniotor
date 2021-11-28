import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Path } from 'router';
import Dashboard from 'modules/dashboard';
import Account from 'modules/user/Account';

const Content: FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<Dashboard />} path={Path.Dashboard} />
        <Route element={<Account />} path={Path.Account} />
      </Routes>
    </div>
  );
};

export default Content;
