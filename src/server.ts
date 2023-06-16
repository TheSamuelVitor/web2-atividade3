import express from 'express'
import { Server } from 'socket.io'

const app = express()
const port = 3000
const io = new Server(port)

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('novo usuario conectado')
  socket.on('mensageiro', (msg) => {
    io.emit(msg)
  })
})

app.listen(port, () => {
  console.log('Servidor rodando na porta '+port)
})
