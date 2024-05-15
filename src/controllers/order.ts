import { Request, Response } from 'express';
import { getOrderService,
         getOrdersService, 
         cancelOrderService, 
         sellOrderService, 
         buyOrderService, 
         getOrderBookService } from '../services/order-service';

export const getOrder = async (req: Request, res: Response) => {
  try {
    const data = await getOrderService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the getOrder.');
  }
}

export const getOrders = async (req: Request, res: Response) => {
  try {
    const data = await getOrdersService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the getOrders.');
  }
}

export const cancelOrder = async (req: Request, res: Response) => {
  try {
    const data = await cancelOrderService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the cancelOrder.');
  }
}

export const sellOrder = async (req: Request, res: Response) => {
  try {
    const data = await sellOrderService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the sellOrder.');
  }
}

export const buyOrder = async (req: Request, res: Response) => {
  try {
    const data = await buyOrderService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the buyOrder.');
  }
}

export const getOrderBook = async (req: Request, res: Response) => {
  try {
    const data = await getOrderBookService(req, res);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the getOrderBook.');
  }
}