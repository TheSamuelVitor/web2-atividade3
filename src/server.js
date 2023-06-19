// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')

const app = express()

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/', require('./routes/music'))
app.use('/', require('./routes/football-games'))

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})
