import { Request, Response } from 'express';
import { getTickerService } from '../services/ticker-service';

export const getTicker = async (req: Request, res: Response) => {
  try {
    const data = await getTickerService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the getTickerService.');
  }
}