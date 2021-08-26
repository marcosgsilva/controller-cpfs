import { IStatus } from '../exceptions/CPFExceptions'
import { IUser } from './IUser'

export interface IUserService{
  fetch(): Promise<IUser[]>,
  addCpf(cpf: string): Promise<IStatus>,
  remove(cpf:string):Promise<IStatus>
}
