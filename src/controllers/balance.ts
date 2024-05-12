import { Request, Response } from 'express';
import { getBalancesService } from '../services/balance-service';

export const getbalances = async (req: Request, res: Response) => {
  try {
    const data = await getBalancesService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the balance.');
  }
}