import { Router, Request, Response } from 'express';

export const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('this is the new root of the server');
});

router.get('/info', (req: Request, res: Response) => {
  res.send('this is the info page of the server');
});
