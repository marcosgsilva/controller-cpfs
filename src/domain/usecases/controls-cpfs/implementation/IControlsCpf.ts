import { Request, Response } from 'express'
import { IUser } from '../model/IUser'

export interface IControlsCPF{
  handle(req: Request, res: Response): IUser
}
