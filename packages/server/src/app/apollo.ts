import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
// import { typeDefs, resolvers } from 'graphql-scalars';

import environment from 'env/environment';
import { AuthResolver } from 'modules/auth/resolver';
import { UserResolver } from 'modules/user/resolver';
import { GameResolver } from 'modules/game/resolver';

const { NODE_ENV } = environment;

export const startApollo = async (): Promise<ApolloServer> => {
  const schema = await buildSchema({
    dateScalarMode: 'timestamp',
    resolvers: [AuthResolver, GameResolver, UserResolver],
  });

  const server = new ApolloServer({
    context: ({ req, res }) => ({ req, res }),
    debug: NODE_ENV === 'development',
    schema,
  });

  await server.start();

  return server;
};
