import { IStatus } from '../exceptions/CPFExceptions'

export interface ICPFExceptions {
  invalidException(cpf: string, res): Promise<IStatus>,
  notFoundCPFException(data: number, res): IStatus,
  existsCPFException(res, lenght: number): Promise<IStatus>,
  notNullException(cpf): IStatus
}
