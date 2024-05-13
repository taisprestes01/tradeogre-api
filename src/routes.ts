
import { Router } from 'express';
 
import { getbalances, getbalance } from './controllers/balance';
import { getOrder } from './controllers/order';
const router = Router();

router.get('/getbalances', getbalances);
router.get('/getbalance/:currency', getbalance);

router.get('/getOrder/:uuid', getOrder);
export default router;