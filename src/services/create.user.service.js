import userRepository from "../repositories/user.repository.js";

export class CreateUserService {
  execute(data) {
    if (!data.username) {
      throw new Error('Username é obrigatório')
    }
    
    // Verificar se username existe no banco de dados
    const existUser = userRepository.findByUsername(data.username)

    if (existUser) {
      throw new Error('Usuário já cadastrado!')
    }

    // Salvar o usuário
    return userRepository.save(data)
  }
}