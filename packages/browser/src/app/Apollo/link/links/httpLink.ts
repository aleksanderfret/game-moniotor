import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  credentials: 'include',
  uri: 'http://localhost:4000/graphql'
});

export default httpLink;
