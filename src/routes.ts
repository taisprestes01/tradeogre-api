
import { Router } from 'express';
 
import { getbalances } from './controllers/balance';

const router = Router();

router.get('/getbalances', getbalances);

export default router;