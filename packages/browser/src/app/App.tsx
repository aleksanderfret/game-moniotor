import React, { FC, useEffect, useReducer } from 'react';
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
import { theme } from 'theme';
import messages from 'translations';
import { AppContent, AppIntro } from 'app/layout';

const locales = new Set(['en', 'pl']);

const App: FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  const { isAuthenticated } = state;

  useEffect(() => {
    const locale = navigator.language;

    if (locale && locales.has(locale)) {
      // TODO check user preferences cookies and localstorage or token
      dispatch(setLocale(locale));
    }
  }, []);

  if (!isAuthenticated) {
    dispatch(setIsAuthenticated(true));
  }

  const { locale } = state;

  return (
    <AppDispatchProvider value={dispatch}>
      <AppStateProvider value={state}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <ThemeProvider theme={theme}>
            <Router>{!isAuthenticated ? <AppContent /> : <AppIntro />}</Router>
          </ThemeProvider>
        </IntlProvider>
      </AppStateProvider>
    </AppDispatchProvider>
  );
};

export default App;
