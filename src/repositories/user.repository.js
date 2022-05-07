class UserRepository {
  // NÃO FAZEMOS NENHUMA VALIDAÇÃO
  users = []

  findByUsername(username) {
    // SELECT * FROM USERS WHERE USERNAME = '' LIMIT 1
    const user = this.users.find(user => user.username === username)
    return user
  }

  save(user) {
    // INSERT INTO USERS(USERNAME, NAME) VALUES ('', '') 
    user.id =  Math.random().toString()    
    this.users.push(user)

    return user
  }
}

export default new UserRepository()