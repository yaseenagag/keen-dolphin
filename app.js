'use strict'

const express = require('express')
const app = express()
const pug = require('pug');
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index.pug')
})

app.listen(3000)
console.log('Listening on Port 3000')

module.exports = app
