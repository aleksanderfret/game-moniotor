import React, { FC } from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import cache from './cache';
import link from './link';

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  defaultOptions: {
    mutate: {
      errorPolicy: 'all'
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all'
    },
    watchQuery: {
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first',
      errorPolicy: 'none'
    }
  },
  link
});

const Apollo: FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
