import {Request, Response} from 'express';

const apiKeyPublic = process.env.TRADEOGRE_API_KEY_PUBLIC || '';
const apiKeyPrivate = process.env.TRADEOGRE_API_KEY_PRIVATE || '';

export const balances = async  (req: Request, res:Response ) => {
    const url = 'https://tradeogre.com/api/v1/account/balance';
    const currency = req.query.currency || req.body.currency;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(apiKeyPublic + ':' + apiKeyPrivate).toString('base64')}`
      },
      body:'currency=' + currency
    };
}