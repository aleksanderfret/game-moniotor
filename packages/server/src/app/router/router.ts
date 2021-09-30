import { Router } from 'express';

import { Routes } from 'types/types';

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

export default useRoutes;
