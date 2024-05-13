import { Request, Response } from 'express';
import { getOrderService } from '../services/order-service';

export const getOrder = async (req: Request, res: Response) => {
  try {
    const data = await getOrderService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the balances.');
  }
}
