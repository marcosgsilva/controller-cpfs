import { IUserRepository } from '../../../infrastructure/repository/IUserRepository'
import { ValidateCpf } from '../../../utils/validate-cpf'
import { ICPFExceptions } from '../interfaces/ICPFException'

export interface IStatus{
  status: number,
  message: string,
  type: string,
  createdAt?: string,
  cpf?: string
}

export class CPFExceptions implements ICPFExceptions {
  constructor(private userRepository: IUserRepository) {
  }

  notNullException(cpf: string): IStatus {
    if (!cpf) {
      return { type: 'InvalidCpfException', message: 'CPF is not valid.', status: 400 }
    }
  }

  async invalidException(cpf: string, res): Promise<IStatus> {
    const validCpf = ValidateCpf.cpf(cpf.toString())
    if (validCpf === false) {
      const msg = { type: 'InvalidCpfException', message: 'CPF is not valid.', status: 400 }
      return msg
    }
  }

  async existsCPFException(cpf: string, res): Promise<IStatus> {
    const existsCpf = await this.userRepository.findByCPF(cpf)
    if (existsCpf === true) {
      return { type: 'existsCPFException', message: 'existing cpf', status: 400 }
    }
  }

  notFoundCPFException(data: number):IStatus {
    if (data === 0) {
      return { type: 'existsCPFException', message: 'Not Found cpf', status: 404 }
    }
  }
}
