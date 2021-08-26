import { UserRepository } from '../../../infra/data/UserRepository'
import logger from '../../../middlwares/logger'
import { CPFExceptions } from '../exceptions/CPFExceptions'
import { ControlsCpfsDeleteController } from './controls-cpfs-delete-controller'
import { ControlsCpfsListController } from './controls-cpfs-list-controller'
import { ControlsCpfsPostController } from './controls-cpfs-post-controller'
import { ControlsCpfsService } from './controls-cpfs-service'

export const makeControlsCpfsCreateController = () => {
  logger.info('makeResourcesListController')
  const resoucesListRepo = new UserRepository()
  const cpfException = new CPFExceptions(resoucesListRepo)
  const resourcesListService = new ControlsCpfsService(resoucesListRepo)
  return new ControlsCpfsPostController(cpfException, resourcesListService)
}

export const makeControlsCpfsListController = () => {
  logger.info('makeResourcesListController')
  const resoucesListRepo = new UserRepository()
  const resourcesListService = new ControlsCpfsService(resoucesListRepo)
  return new ControlsCpfsListController(resourcesListService)
}

export const makeConttrolsCpfsDeleteController = () => {
  logger.info('makeResourcesListController')
  const resoucesListRepo = new UserRepository()
  const cpfException = new CPFExceptions(resoucesListRepo)
  const resourcesListService = new ControlsCpfsService(resoucesListRepo)
  return new ControlsCpfsDeleteController(cpfException, resourcesListService)
}
