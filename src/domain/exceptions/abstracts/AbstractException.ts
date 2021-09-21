export abstract class AbstractException {
  invalidException(cpf: string) {
    throw new Error('InvalidException')
  }

  existsCPFException(res, lenght: number) {
    throw new Error('existsCPFException')
  }

  notFoundCPFException(data: number) {
    throw new Error('notFoundCPFException')
  }
}
