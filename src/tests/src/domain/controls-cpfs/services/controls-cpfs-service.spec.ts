import { ControlsCpfsService } from '../../../../../domain/usecases/controls-cpfs/controls-cpfs-service'
import { UserRepository } from '../../../../../infrastructure/repository/UserRepository'

const userRepository: jest.Mocked<UserRepository> = {
  findAll: jest.fn(),
  findByCPF: jest.fn(),
  add: jest.fn(),
  remove: jest.fn()
}
describe('controls service Post CPFS', () => {
  it('should call controlsCpfservice.POST onc and with correct vales', async() => {
    const sut = new ControlsCpfsService(userRepository)
    userRepository.add.mockResolvedValueOnce({ chave1: 'valor1' } as any
    )
    const user = await sut.addCpf(await { chave1: 'valor1' } as any
    )
    expect(user).toEqual({ chave1: 'valor1' })
  })
  it('should call controlsCPFSService.GET once and with correct values', async () => {
    const sut = new ControlsCpfsService(userRepository)
    userRepository.findAll.mockResolvedValueOnce({ chave1: 'valor1' } as any
    )
    const user = await sut.fetch()
    expect(user).toEqual({ chave1: 'valor1' })
  })
  it('Should call controlsCPFSService.Delete once and with correct values', async () => {
    const sut = new ControlsCpfsService(userRepository)
    userRepository.remove.mockResolvedValueOnce({ chave1: 'valor1' } as any)

    const user = await sut.remove('42424')
    expect(user).toEqual({ chave1: 'valor1' })
  })
})
