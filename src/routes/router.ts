import { NextFunction, Request, Response, Router } from 'express'
import { makeControlsCpfsCreateController, makeControlsCpfsListController, makeConttrolsCpfsDeleteController } from '../domain/usecases/controls-cpfs'

export const controlsCpfRouter = Router()

controlsCpfRouter
  .route('/controlscpf/v1/controlscpfs')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    const controlsCpfRouter = makeControlsCpfsListController()
    return controlsCpfRouter.handle({ req, res })
  })
controlsCpfRouter
  .route('/controlscpf/v1/controlscpfs/:cpf')
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    const controlsCpfRouter = makeConttrolsCpfsDeleteController()
    return controlsCpfRouter.handle({ req, res })
  })

controlsCpfRouter
  .route('/controlscpf/v1/controlscpfs')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    const controlsCpfRouter = makeControlsCpfsCreateController()
    return controlsCpfRouter.handle({ req, res })
  })
