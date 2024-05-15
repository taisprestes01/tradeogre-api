import { Request, Response } from 'express';
import querystring from 'querystring';
import '../index.ts';

const apiKeyPublic = process.env.TRADEOGRE_API_KEY_PUBLIC || '';
const apiKeyPrivate = process.env.TRADEOGRE_API_KEY_PRIVATE || '';
const baseUrl = process.env.BASE_URL || '';

export const getOrderService = async (req: Request, res: Response) => {
  const uuid = req.params.uuid || '';
  const url = `${baseUrl}/account/order/${uuid}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${apiKeyPublic}:${apiKeyPrivate}`).toString('base64')}`
    },
  };

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


export const getOrdersService = async (req: Request, res: Response) => {
    const url = `${baseUrl}/account/orders`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${apiKeyPublic}:${apiKeyPrivate}`).toString('base64')}`
      },
    };
  
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
  

 

export const cancelOrderService = async (req: Request, res: Response) => {
    const uuid = req.params.uuid || '';
    const url = `${baseUrl}/order/cancel`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${apiKeyPublic}:${apiKeyPrivate}`).toString('base64')}`
      },
      body: querystring.stringify({ uuid })
    };
  
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
  
export const sellOrderService = async (req: Request, res: Response) => {
  const market  = req.params.market  || '';
  const quantity   = req.params.quantity   || '';
  const price  = req.params.price  || '';
  const url = `${baseUrl}/order/sell`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${apiKeyPublic}:${apiKeyPrivate}`).toString('base64')}`
    },
    body: querystring.stringify({ market, quantity, price})
  };

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

export const buyOrderService = async (req: Request, res: Response) => {
  const market  = req.params.market  || '';
  const quantity   = req.params.quantity   || '';
  const price  = req.params.price  || '';
  const url = `${baseUrl}/order/buy`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${apiKeyPublic}:${apiKeyPrivate}`).toString('base64')}`
    },
    body: querystring.stringify({ market, quantity, price})
  };

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