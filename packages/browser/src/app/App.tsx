import React, { FC } from 'react';

import Providers from './Providers';
import ContentController from './ContentController';

const App: FC = () => {
  return (
    <Providers>
      <ContentController />
    </Providers>
  );
};

export default App;
