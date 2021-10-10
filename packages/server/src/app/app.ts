import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';

import authRouter from 'modules/auth/router';
import { localeMiddleware } from 'app/middlewares/localeMiddleware';

const startApp = async (app: Application): Promise<Application> => {
  app.use(cors({ credentials: true, origin: 'http://localhost:4000' }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));
  app.use(localeMiddleware);

  app.use('/auth', authRouter);

  app.use('*', (_, res) => res.sendFile(path.resolve('public/index.html')));

  return app;
};

export default startApp;
