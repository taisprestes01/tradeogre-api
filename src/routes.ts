
import { Router } from 'express';
import { Request, Response } from 'express';
import { balances } from './controllers/balance';
const router = Router();

router.get('/balances', balances);

export default router;