import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Router } from 'express';
import path from 'path';

import { Routes } from 'types/types';
import { localeMiddleware } from 'app/middlewares/localeMiddleware';

type RoutesCreator = (routes: Routes) => Router;
type RouterCreator = (router: Router) => RoutesCreator;

const createRouter: RouterCreator =
  (router: Router): RoutesCreator =>
  (routes: Routes) => {
    routes.forEach(({ handlers, method, path }) => {
      router[method](path, ...handlers);
    });

    return router;
  };

const useRoutes = createRouter(Router());

const startApp = async (app: Application): Promise<Application> => {
  app.use(cors({ credentials: true, origin: 'http://localhost:4000' }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));
  app.use(localeMiddleware);

  app.use(useRoutes([]));

  app.use('*', (_, res) => res.sendFile(path.resolve('public/index.html')));

  return app;
};

export default startApp;
