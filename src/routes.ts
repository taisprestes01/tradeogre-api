
import { Router } from 'express';
 
import { getbalances, getbalance } from './controllers/balance';
import { getOrder, getOrders, cancelOrder, sellOrder, buyOrder } from './controllers/order';
import { getTradeHistory } from './controllers/history';
import { getTicker } from './controllers/ticker';
const router = Router();

router.get('/getbalances', getbalances);
router.get('/getbalance/:currency', getbalance);

router.get('/getOrders', getOrders);
router.get('/getOrder/:uuid', getOrder);
router.get('/cancelOrder/:uuid', cancelOrder);
router.get('/sellOrder/:market/:quantity/:price', sellOrder);
router.get('/buyOrder/:market/:quantity/:price', buyOrder);

router.get('/getTradeHistory/:market', getTradeHistory);

router.get('/getTicker/:market', getTicker);
export default router;