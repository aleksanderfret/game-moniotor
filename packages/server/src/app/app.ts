import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';

import authRouter from 'modules/auth/router';
import { startApollo } from 'app/apollo';
import { localeMiddleware } from 'app/middlewares/localeMiddleware';

const startApp = async (app: Application): Promise<Application> => {
  app.use(cors({ credentials: true, origin: 'http://localhost:4000' }));
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
