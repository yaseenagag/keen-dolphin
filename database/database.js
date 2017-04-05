'use strict';
const databaseName = 'sb_library'
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const database = pgp(connectionString)

const getAllBooks = () => {
  const sql = 'SELECT * FROM books'
  return database.any(sql)
};

const getBookById = (book_id) => {
  const sql = 'SELECT * FROM books WHERE books.id = $1'
  return database.one(sql, [book_id])
};

module.exports = {
  getAllBooks,
  getBookById
}
