import { IUserRepository } from '../../../infra/data/IUserRepository'
import { IStatus } from '../exceptions/CPFExceptions'
import { IUser } from '../interfaces/IUser'
import { IUserService } from '../interfaces/IUserService'

export class ControlsCpfsService implements IUserService {
  constructor(private userRepository: IUserRepository) {
  }

  fetch(): Promise<IUser[]> {
    const users = this.userRepository.findAll()
    return users
  }

  async addCpf(cpf: string): Promise<IStatus> {
    const user = await this.userRepository.add(cpf)
    return user
  }

  async remove(cpf: string): Promise<IStatus> {
    return await this.userRepository.remove(cpf)
  }
}
