import { Router, Request, Response } from 'express';

export const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('this is the root of the image route');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send('this returns image with id: ' + req.params.id);
});
