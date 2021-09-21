import { IStatus } from '../../../exceptions/CPFExceptions'
import { IUserRepository } from '../implementation/IUserRepository'
import { IUserService } from '../implementation/IUserService'
import { IUser } from '../model/IUser'
import RabbitmqServer from '../../../../infrastructure/rabbitmq'

export class ControlsCpfsService implements IUserService {
  constructor(private userRepository: IUserRepository,
    private rabbitmqServer: RabbitmqServer) {
  }

  fetch(): Promise<IUser[]> {
    const users = this.userRepository.findAll()
    return users
  }

  async addCpf(cpf: string): Promise<IStatus> {
    await this.rabbitmqServer.start()
    await this.rabbitmqServer.publishInQueue('nest', JSON.stringify(cpf))
    await this.rabbitmqServer.publishInExchange('amq.direct', 'rota', JSON.stringify(cpf))
    const user = await this.userRepository.add(cpf)
    return user
  }

  async remove(cpf: string): Promise<IStatus> {
    return await this.userRepository.remove(cpf)
  }
}
