const express = require('express')
const bodyParser = require('body-parser')
const db = require(' ..config/database.js')
const server = express()

server.set('port', process.env.PORT || '3000')

server.use(bodyParser.json())

server.post('/api/test/reset-db', (request, response, next) =>{
  db.resetDb().then(() => {
    response.status(200).end()
  })
})

server.post('/api/books', (request, response, next) => {
  if ( request.body.hasOwnProperty("title") ) {
    request.body.genres= request.body.genres.split(',')
    db.createWholeBook(request.body).then(book => {
      response.status(201).json(book).end
    })
  }
})
