import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
// import { typeDefs, resolvers } from 'graphql-scalars';

import environment from 'env/environment';
import { AuthResolver } from 'modules/auth/resolver';
import { UserResolver } from 'modules/user/resolver';

const { NODE_ENV } = environment;

export const startApollo = async (): Promise<ApolloServer> => {
  const schema = await buildSchema({
    dateScalarMode: 'timestamp',
    resolvers: [AuthResolver, UserResolver]
  });

  const server = new ApolloServer({
    context: ({ req, res }) => ({ req, res }),
    debug: NODE_ENV === 'development',
    schema
  });

  await server.start();

  return server;
};
