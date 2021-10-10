import { Router } from 'express';

import { isAuth } from './isAuth';
import {
  changeLogin,
  changePassword,
  confirmAccountRemoval,
  confirmSignUp,
  refreshToken,
  removeAccount,
  resetPassword,
  signIn,
  signOut,
  signUp
} from './controllers';

const router = Router();

router.post('/refresh-token', refreshToken);
router.post('/sign-in', signIn);
router.post('/sign-up', signUp);
router.post('/sign-out', isAuth, signOut);
router.post('/change-password', isAuth, changePassword);
router.post('/change-login', isAuth, changeLogin);
router.post('/confirm-removal', isAuth, confirmAccountRemoval);
router.post('/confirm-sign-up', confirmSignUp);
router.post('/resetPassword', resetPassword);
router.post('/remove-account', isAuth, removeAccount);

export default router;
