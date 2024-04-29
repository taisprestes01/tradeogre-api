import express, {Request, Response} from 'express';
import  btoa  from 'btoa';
import createApp from './app';

const app = createApp()
const port =  process.env.PORT || 3000;
const apiKeyPublic = process.env.TRADEOGRE_API_KEY_PUBLIC || '';
const apiKeyPrivate = process.env.TRADEOGRE_API_KEY_PRIVATE || '';

const currency = 'ZEPH'; 

app.get('/balance', async (req: Request, res:Response ) => {
  const url = 'https://tradeogre.com/api/v1/account/balance';
  const data = { currency: currency };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(apiKeyPublic + ':' + apiKeyPrivate)}`
    },
    body:'currency=' + currency
  };

  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default(url, options);
    const responseData = await response.json();
    res.json(responseData);
  } catch (error: any) {
    res.json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});