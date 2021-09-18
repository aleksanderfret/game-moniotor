import { Crud } from 'enums/enums';
import { Routes } from 'types/types';
import { refreshToken } from './controllers';

const { Post } = Crud;

const scope = '/api/auth';

const userRoutes: Routes = [
  { handlers: [refreshToken], method: Post, path: `${scope}/refresh-token` }
];

export default userRoutes;
