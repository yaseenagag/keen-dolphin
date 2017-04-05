DROP TABLE IF EXISTS books;
CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  year INTEGER,
  genre VARCHAR(255),
  bookUrl VARCHAR,
  description VARCHAR
);
