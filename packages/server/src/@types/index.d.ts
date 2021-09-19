import { Locale } from 'types/types';
import User from 'modules/user/entity';

declare global {
  namespace Express {
    interface Request {
      locale: Locale;
      user?: User;
    }
  }
}
