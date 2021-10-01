import React, { FC, useEffect, useReducer } from 'react';

import {
  appReducer,
  initialAppState,
  setIsAuthenticated,
  setLocale
} from 'context';
import Providers from './Providers';
import Content from './Content';
import Intro from './Intro';
import Page from 'ui/Page';

const locales = new Set(['en', 'pl']);

const App: FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  const { isAuthenticated } = state;

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
    <Providers dispatch={dispatch} state={state}>
      <Page>{!isAuthenticated ? <Content /> : <Intro />}</Page>
    </Providers>
  );
};

export default App;
