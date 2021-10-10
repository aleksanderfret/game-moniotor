import React, { FC, ReactNode, useEffect, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import {
  AppDispatchProvider,
  appReducer,
  AppStateProvider,
  initialAppState,
  setIsAuthenticated,
  setLocale
} from 'context';
import theme from 'theme';
import messages from 'translations';
import GlobalStyle from './GlobalStyle';

interface ProvidersProps {
  children: ReactNode;
}

const locales = new Set(['en', 'pl']);

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  const { isAuthenticated, locale } = state;

  useEffect(() => {
    const locale = navigator.language;

    if (locale && locales.has(locale)) {
      // TODO check user preferences cookies and localStorage or token
      dispatch(setLocale(locale));
    }
  }, []);

  if (!isAuthenticated) {
    dispatch(setIsAuthenticated(true));
  }

  return (
    <AppDispatchProvider value={dispatch}>
      <AppStateProvider value={state}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <ThemeProvider theme={theme}>
            <Router>
              <GlobalStyle />
              {children}
            </Router>
          </ThemeProvider>
        </IntlProvider>
      </AppStateProvider>
    </AppDispatchProvider>
  );
};

export default Providers;
