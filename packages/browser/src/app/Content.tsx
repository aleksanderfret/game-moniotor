import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Path } from 'router';
import Dashboard from 'modules/dashboard';

const Content: FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<Dashboard />} path={Path.Dashboard} />
      </Routes>
    </div>
  );
};

export default Content;
