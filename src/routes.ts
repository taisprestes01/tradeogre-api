
import { Router } from 'express';
 
import { getbalances, getbalance } from './controllers/balance';
import { getOrder, getOrders, cancelOrder, sellOrder } from './controllers/order';
const router = Router();

router.get('/getbalances', getbalances);
router.get('/getbalance/:currency', getbalance);

router.get('/getOrders', getOrders);
router.get('/getOrder/:uuid', getOrder);
router.get('/cancelOrder/:uuid', cancelOrder);
router.get('/sellOrder/:market/:quantity/:price', sellOrder);
export default router;