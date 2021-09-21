import logger from '../../../infrastructure/middlwares/logger'
import { CPFExceptions } from '../../../domain/exceptions/CPFExceptions'
import { ControlsCpfsDeleteController } from './controls-cpfs-delete-controller'
import { ControlsCpfsListController } from './controls-cpfs-list-controller'
import { ControlsCpfsPostController } from './controls-cpfs-post-controller'
import { ControlsCpfsService } from './controls-cpfs-service'
import { ControlsUserRepository } from './controls-user-repository'
import RabbitmqServer from '../../../infrastructure/rabbitmq'

export const makeControlsCpfsCreateController = () => {
  logger.info('makeControlsCpfsCreateController')
  const resoucesListRepo = new ControlsUserRepository()
  const cpfException = new CPFExceptions(resoucesListRepo)
  const rabbitmq = new RabbitmqServer('amqp://guest:1234@localhost')
  const resourcesListService = new ControlsCpfsService(resoucesListRepo, rabbitmq)
  return new ControlsCpfsPostController(cpfException, resourcesListService)
}

export const makeControlsCpfsListController = () => {
  logger.info('makeControlsCpfsListController')
  const resoucesListRepo = new ControlsUserRepository()
  const resourcesListService = new ControlsCpfsService(resoucesListRepo)
  return new ControlsCpfsListController(resourcesListService)
}

export const makeConttrolsCpfsDeleteController = () => {
  logger.info('makeConttrolsCpfsDeleteController')
  const resoucesListRepo = new ControlsUserRepository()
  const cpfException = new CPFExceptions(resoucesListRepo)
  const resourcesListService = new ControlsCpfsService(resoucesListRepo)
  return new ControlsCpfsDeleteController(cpfException, resourcesListService)
}
