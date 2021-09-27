import React, { ReactElement } from 'react';
import {
  render as rtlRender,
  RenderOptions as rtlRenderOptions
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import theme from 'theme';
import messages from 'translations';
import { Locale } from 'context/types';

interface RenderOptions extends rtlRenderOptions {
  locale: Locale;
}

export const render = (
  ui: ReactElement,
  { locale, ...options }: RenderOptions = { locale: 'en' }
) =>
  rtlRender(
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </IntlProvider>,
    options
  );
