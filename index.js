const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/database.js')
const server = express()
const pug = require('pug')
const path = require('path')

server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'pug')


server.get('/', (request, response) => {
  response.render('index.pug')
})

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

server.set('port', process.env.PORT || '3000')
server.listen(3000)
console.log('listening on port 3000')

// if (process.env.NODE_ENV !== 'test'){
//   server.listen(server.get('port'))
// }

module.exports = server
