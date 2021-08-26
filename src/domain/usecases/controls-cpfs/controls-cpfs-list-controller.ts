import { IController } from '../interfaces/IController'
import { IUserService } from '../interfaces/IUserService'

export class ControlsCpfsListController implements IController {
  constructor(private controlsCpfsService: IUserService) {
  }

  async handle({ req, res }) {
    const list = await this.controlsCpfsService.fetch()
    return res.status(200).json(list)
  }
}
