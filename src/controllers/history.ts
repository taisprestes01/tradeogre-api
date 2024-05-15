import { Request, Response } from 'express';
import { getTradeHistoryService } from '../services/history-service';

export const getTradeHistory = async (req: Request, res: Response) => {
  try {
    const data = await getTradeHistoryService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the getTradeHistory.');
  }
}