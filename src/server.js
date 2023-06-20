/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const http = require('http')

const app = express()

app.use('/', require('./routes/music'))
app.use('/', require('./routes/football-games'))

const server = http.createServer(app)
const io = require('socket.io')(server)

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/chat.html')
})

io.on('connection', (socket) => {
  console.log('novo usuário conectado')
  socket.on('mensageiro', (msg) => {
    io.emit('mensageiro', msg)
  })

  socket.on('sincronizarConteudo', (conteudo) => {
    io.emit('sincronizarConteudo', conteudo)
  })

  socket.on('mudouTemperatura', (novaTemperatura) => {
    console.log('servidor notificado: mudouTemperatura')
    io.emit('mudouTemperatura', novaTemperatura)
  })
})

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})
