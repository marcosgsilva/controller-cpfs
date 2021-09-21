import { IController } from './implementation/IController'
import { IUserService } from './implementation/IUserService'

export class ControlsCpfsListController implements IController {
  constructor(private controlsCpfsService: IUserService) {
  }

  async handle({ req, res }) {
    const list = await this.controlsCpfsService.fetch()
    return res.status(200).json(list)
  }
}
