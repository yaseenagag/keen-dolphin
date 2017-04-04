const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/database.js')
const server = express()
const pug = require('pug')
const path = require('path')

server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.json())


server.set('view engine', 'pug')


server.get('/', (request, response) => {
  response.render('index.pug')
})

server.get('/allBooks', (request, response) => {
  db.allBooks()
  .then(book => response.json(book))

})

server.listen(3000)
module.exports = server
