import { formatDocumentCpfCnpj } from '../../../utils/format-document'
import { IStatus } from '../exceptions/CPFExceptions'
import { IController } from '../interfaces/IController'
import { ICPFExceptions } from '../interfaces/ICPFException'
import { IUserService } from '../interfaces/IUserService'
export class ControlsCpfsDeleteController implements IController {
  constructor(private cpfException: ICPFExceptions, private controlService: IUserService) {
  }

  async handle({ req, res }) {
    const cpf = formatDocumentCpfCnpj(req.query.cpf)
    const cpfException = await this.cpfException.invalidException(cpf, res)
    let removeCpf
    if (!cpfException) {
      removeCpf = await this.controlService.remove(cpf)
    }
    const response: IStatus = cpfException || removeCpf

    return res.status(response.status).json(response)
  }
}
