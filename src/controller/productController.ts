import { Request, Response } from 'express';
import pool from '../db';

export const addProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  try {
    const [result] = await pool.query('CALL AddProduct(?, ?)', [name, price]);
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json( error);
  }
};

export const searchProduct = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    const [rows] = await pool.query('CALL SearchProduct(?)', [name]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getPaginatedProducts = async (req: Request, res: Response) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (parseInt(page as string) - 1) * parseInt(limit as string);
  try {
    const [rows] = await pool.query('CALL GetPaginatedProducts(?, ?)', [parseInt(limit as string), offset]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json( error );
  }
};


export const filterProducts = async (req: Request, res: Response) => {
  const { minPrice, maxPrice, name } = req.query;
  try {
    const [rows] = await pool.query('CALL FilterProducts(?, ?, ?)', [minPrice, maxPrice, name]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json( error );
  }
};


  