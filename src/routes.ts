
import { Router } from 'express';
 
import { getbalances, getbalance } from './controllers/balance';
import { getOrder, getOrders, cancelOrder, sellOrder, buyOrder, getOrderBook } from './controllers/order';
import { getTradeHistory } from './controllers/history';
import { getTicker } from './controllers/ticker';
import { getMarkets } from './controllers/markets';

const router = Router();

router.get('/getbalances', getbalances);
router.get('/getbalance/:currency', getbalance);

router.get('/getOrders', getOrders);
router.get('/getOrder/:uuid', getOrder);
router.get('/cancelOrder/:uuid', cancelOrder);
router.get('/sellOrder/:market/:quantity/:price', sellOrder);
router.get('/buyOrder/:market/:quantity/:price', buyOrder);
router.get('/getOrderBook/:market', getOrderBook);

router.get('/getTradeHistory/:market', getTradeHistory);

router.get('/getTicker/:market', getTicker);

router.get('/getMarkets', getMarkets);
export default router;