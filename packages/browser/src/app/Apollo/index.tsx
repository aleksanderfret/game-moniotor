import React, { FC } from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import cache from './cache';
import link from './link';

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  defaultOptions: {
    mutate: {
      errorPolicy: 'none',
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'none',
    },
    watchQuery: {
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first',
      errorPolicy: 'ignore',
    },
  },
  link,
});

const Apollo: FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
