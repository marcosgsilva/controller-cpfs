import { formatDocumentCpfCnpj } from '../../../utils/format-document'
import { IStatus } from '../exceptions/CPFExceptions'
import { IController } from '../interfaces/IController'
import { ICPFExceptions } from '../interfaces/ICPFException'
import { IUserService } from '../interfaces/IUserService'

export class ControlsCpfsPostController implements IController {
  constructor(private cpfException: ICPFExceptions, private controlsCpfService: IUserService) {

  }

  async handle({ req, res }) {
    const formatCpf = formatDocumentCpfCnpj(req.query.cpf)
    const cpfException = await this.cpfException.invalidException(formatCpf, res)
    const existsCPFException = await this.cpfException.existsCPFException(formatCpf, res)
    const addCpf = await this.controlsCpfService.addCpf(formatDocumentCpfCnpj(req.query.cpf))
    const response: IStatus = cpfException || existsCPFException || addCpf
    return res.status(response.status).json(response)
  }
}
