import React, { FC, useEffect, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import {
  AppDispatchProvider,
  appReducer,
  AppStateProvider,
  initialAppState,
  setIsAuthenticated,
  setLocale
} from 'context';
import { AppContent, AppIntro } from 'app/layout';
import messages from 'translations';

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
          <Router>{isAuthenticated ? <AppContent /> : <AppIntro />}</Router>
        </IntlProvider>
      </AppStateProvider>
    </AppDispatchProvider>
  );
};

export default App;
