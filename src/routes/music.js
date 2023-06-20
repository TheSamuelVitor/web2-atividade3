// eslint-disable-next-line @typescript-eslint/no-var-requires
const express= require('express')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs= require('fs')

const routes = express.Router()

routes.get('/', (req, res) => {

  const range = req.headers.range
  const musica =  __dirname + '/X2Download.app - Alok - Me and You Feat. IRO (Radio edit) (128 kbps).mp3'
  const musicaSize = fs.statSync(musica).size

  const chunkSize = 1 * 1e+5
  const start = Number(range.replace(/\D/g, ''))
  const end = Math.min(start + chunkSize, musicaSize - 1)

  const contentLength = end - start + 1

  const headers = {
    'Content-Range': `bytes ${start}-${end}/${musicaSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'audio/mp3'
  }

  res.writeHead(206, headers)

  const stream = fs.createReadStream(musica, {start,end})
  stream.pipe(res)

})

routes.get('/stream', (req, res) => {
  res.sendFile(__dirname + '/views/music.html')
})

module.exports = routes