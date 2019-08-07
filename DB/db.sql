CREATE DATABASE UNICA;

\c unica;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY ,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY ,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (title, news) values ('my title', 'content of the news');

SELECT * FROM users;
