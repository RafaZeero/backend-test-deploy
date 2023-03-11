import { Request, Response } from 'express';

export const basicRoute = (req: Request, res: Response) => {
  const body = req.body;

  console.log(`Request body: ${body ?? 'No request body'}`);

  res.send('Henlo !!! 😃');
};
