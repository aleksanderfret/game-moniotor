import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import '!style-loader!css-loader!sass-loader!../src/scss/_reset.scss';
import '!style-loader!css-loader!sass-loader!../src/scss/_global.scss';
import theme from '../src/theme';

addDecorator(withThemesProvider([theme], ThemeProvider));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
