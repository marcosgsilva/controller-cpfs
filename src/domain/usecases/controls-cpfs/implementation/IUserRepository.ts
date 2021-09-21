import { IStatus } from '../../../exceptions/CPFExceptions';
import { IUser } from '../model/IUser';

export interface IUserRepository{
  findAll(): Promise<IUser[]>,
  findByCPF(cpf: string): Promise<Boolean>,
  add(cpf: string): Promise<IStatus>,
  remove(cpf: string): Promise<IStatus>
}
