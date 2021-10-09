import React from 'react';
import { addDecorator } from '@storybook/react';

import Providers from '../src/app/Providers';

addDecorator(story => (
  <>
    <Providers>{story()}</Providers>
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
