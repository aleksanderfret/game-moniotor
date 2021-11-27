import { Router } from 'express';

import refreshToken from './refreshToken';

const router = Router();

router.post('/refresh-token', refreshToken);

export default router;
