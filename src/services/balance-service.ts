import { Request, Response } from 'express';
import querystring from 'querystring';
import '../index.ts';

const apiKeyPublic = process.env.TRADEOGRE_API_KEY_PUBLIC || '';
const apiKeyPrivate = process.env.TRADEOGRE_API_KEY_PRIVATE || '';
const baseUrl = process.env.BASE_URL || '';

// Utility function to check API credentials
const validateApiKeys = () => {
  if (!apiKeyPublic || !apiKeyPrivate) {
    throw new Error('Invalid API credentials: Public or Private key is missing.');
  }
};

export const getBalancesService = async (req: Request, res: Response) => {
  try {
    // Validate API credentials
    validateApiKeys();

    const url = `${baseUrl}/account/balances`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${apiKeyPublic}:${apiKeyPrivate}`).toString('base64')}`,
      },
    };

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

export const getBalanceService = async (req: Request, res: Response) => {
  try {
    // Validate API credentials
    validateApiKeys();

    const currency = req.params.currency || '';
    const url = `${baseUrl}/account/balance`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${apiKeyPublic}:${apiKeyPrivate}`).toString('base64')}`,
      },
      body: querystring.stringify({ currency }),
    };

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
