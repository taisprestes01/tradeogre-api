import { Request, Response } from 'express';
import { getmarketsService } from '../services/markets-service';

export const getMarkets = async (req: Request, res: Response) => {
  try {
    const data = await getmarketsService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the getmarketsService.');
  }
}