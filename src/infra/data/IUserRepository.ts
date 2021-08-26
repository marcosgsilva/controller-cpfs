import { IStatus } from '../../domain/usecases/exceptions/CPFExceptions'
import { IUser } from '../../domain/usecases/interfaces/IUser'

export interface IUserRepository{
  findAll(): Promise<IUser[]>,

  findByCPF(cpf: string): Promise<Boolean>,
  add(cpf: string): Promise<IStatus>,
  remove(cpf: string): Promise<IStatus>
}
