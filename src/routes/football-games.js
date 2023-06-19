const express = require('express')
const path = require('path')

const routes = express()

routes.get('/sorteioTimes', (req, res) => {
  const filePath = path.join(__dirname + '/views/football-games.html')
  res.sendFile(filePath)
});

module.exports = routes