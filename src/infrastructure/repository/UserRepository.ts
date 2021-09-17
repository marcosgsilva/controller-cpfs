import { IStatus } from '../../domain/usecases/exceptions/CPFExceptions'
import { IUser } from '../../domain/usecases/interfaces/IUser'
import { MongoHelper } from '../helper/mongodb/mongo-helper'
import { IUserRepository } from '../repository/IUserRepository'

export class UserRepository implements IUserRepository {
  async remove(cpf: string): Promise<IStatus> {
    const user = await MongoHelper.getCollection('user')
    user.drop({ cpf: cpf })
    return { type: 'Success', message: 'cpf deleted', status: 201 }
  }

  async findByCPF(cpf: string): Promise<Boolean> {
    const userCollection = await MongoHelper.getCollection('user')

    const user = await userCollection.findOne({ cpf: cpf })

    if (user?.cpf === cpf) {
      return true
    }

    return false
  }

  async findAll(): Promise<IUser[]> {
    const userCollection = await MongoHelper.getCollection('user')

    const user = await userCollection.find().toArray()
    const users = []
    user.map((user:object) => {
      return users.push(user)
    })

    return users
  }

  async add(cpf: string): Promise<IStatus> {
    const createdAt = new Date().toISOString()
    const message = 'Cpf create sucess'
    const userCollection = await MongoHelper.getCollection('user')
    await userCollection.insert({ cpf: cpf, createdAt: createdAt })
    return { type: 'Success', message: message, createdAt: createdAt, cpf: cpf, status: 200 }
  }
}
