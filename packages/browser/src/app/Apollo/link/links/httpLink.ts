import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  credentials: 'include',
  uri: 'http://localhost:4001/graphql',
});

export default httpLink;
