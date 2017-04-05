const express = require('express')
const bodyParser = require('body-parser')
const db = require('./database/database.js')
const server = express()
const pug = require('pug')
const path = require('path')

server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.json())


server.set('view engine', 'pug')


server.get('/', (request, response) => {
  db.getAllBooks()
  .then(books => {
    response.render('index.pug', {books})
  })
})

server.get('/allBooks', (request, response, next) => {
  db.getAllBooks(request.query)
  .then((books) => {
    response.status(200).json(books)
  })
  .catch(error => {
      console.error(error)
      response.status(500).json({error})
    })
})

server.listen(3000)
module.exports = server
