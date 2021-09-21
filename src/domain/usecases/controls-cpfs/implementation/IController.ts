import { Request, Response } from 'express'
export interface IController {
  handle(options: {
    req?: Request;
    res: Response;
  }): Promise<void>;
}
