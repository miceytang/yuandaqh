import express from 'express';
import { generateErr } from '@middlewares/error-handle';
import { Response } from '../deploy-response-format';

export default (
  req: express.Request,
  res: Response,
  next: express.NextFunction
) => {
  let path = req.path;
  console.log('path:',path)
  console.log('hostname:',req.hostname)
  if(req.hostname == 'yuandaqh.com.cn'){
    res.redirect(301, 'http://www.yuandaqh.com.cn'+path);
  }
  return next();
};
