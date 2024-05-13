
import { Router } from 'express';
 
import { getbalances, getbalance } from './controllers/balance';

const router = Router();

router.get('/getbalances', getbalances);
router.get('/getbalance/:currency', getbalance);
export default router;