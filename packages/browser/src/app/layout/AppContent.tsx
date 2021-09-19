import React, { FC } from 'react';

import { PrivateRouter } from 'router';

const AppContent: FC = () => {
  return (
    <div>
      <PrivateRouter />
    </div>
  );
};

export default AppContent;
