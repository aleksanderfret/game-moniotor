import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';

import environment from 'env/environment';
import authRouter from 'modules/auth/router';
import { startApollo } from 'app/apollo';
import { localeMiddleware } from 'app/middlewares/localeMiddleware';

const { APP_URL, IS_DEV } = environment;

const origin: string[] = [];

if (IS_DEV) {
  origin.push(APP_URL, 'https://studio.apollographql.com');
}

const startApp = async (app: Application): Promise<Application> => {
  app.use(cors({ credentials: true, origin }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));
  app.use(localeMiddleware);

  app.use('/api/auth', authRouter);

  const apollo = await startApollo();

  apollo.applyMiddleware({ app, cors: false });

  app.use('/', (_, res) => res.sendFile(path.resolve('public/index.html')));
  app.use('*', (_, res) => res.status(404).send('Not found'));

  return app;
};

export default startApp;
