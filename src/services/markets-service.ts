import { Request, Response } from 'express';
import '../index.ts';

const baseUrl = process.env.BASE_URL || '';

export const getmarketsService = async (req: Request, res: Response) => {
  const market  = req.params.market  || '';
  const url = `${baseUrl}/markets`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  }
   
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    res.json(responseData);
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred.' });
    }
  }
};