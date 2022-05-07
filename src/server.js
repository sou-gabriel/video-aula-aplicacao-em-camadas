import express from 'express'

import { UserController } from './controllers/user.controller.js'

const app = express()
app.use(express.json())

const userController = new UserController()

app.post('/users', userController.handle)

app.listen(3333, () => {
  console.log('Server is runnin on PORT 3333')
})