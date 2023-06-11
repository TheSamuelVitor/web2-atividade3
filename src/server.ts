import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Página principal',
  })
})

app.listen('3000', () => {
  console.log('Servidor rodando na porta 3000')
})
