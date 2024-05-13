import { Request, Response } from 'express';
import { getBalancesService, getBalanceService } from '../services/balance-service';

export const getbalances = async (req: Request, res: Response) => {
  try {
    const data = await getBalancesService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the balances.');
  }
}

export const getbalance = async (req: Request, res: Response) => {
  try {
    const data = await getBalanceService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the balance.');
  }
}