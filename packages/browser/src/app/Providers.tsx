import React, { FC, ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import { AppDispatchProvider, AppStateProvider } from 'context';
import { AppDispatch, AppState } from 'context/types';
import theme from 'theme';
import messages from 'translations';
import GlobalStyle from './GlobalStyle';

interface ProvidersProps {
  children: ReactNode;
  dispatch: AppDispatch;
  state: AppState;
}

const Providers: FC<ProvidersProps> = ({ children, dispatch, state }) => {
  const { locale } = state;

  return (
    <AppDispatchProvider value={dispatch}>
      <AppStateProvider value={state}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <Router>{children}</Router>
            </>
          </ThemeProvider>
        </IntlProvider>
      </AppStateProvider>
    </AppDispatchProvider>
  );
};

export default Providers;
