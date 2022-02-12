DROP TABLE IF EXISTS user_authorities;
DROP TABLE IF EXISTS authorities;
DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS book_autors;

CREATE TABLE IF NOT EXISTS authorities (
  name VARCHAR(50) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_authorities (
  user_id INT  NOT NULL,
  authority_name VARCHAR(50) NOT NULL,
  FOREIGN KEY (authority_name) REFERENCES authorities (name),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS publishers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS authors (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS books (
  isbn VARCHAR(13) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  publisher_id INT NOT NULL,
  publish_year NUMERIC(4),
  picture VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS book_autHors (
  book_isbn VARCHAR(13) NOT NULL,
  author_id INT NOT NULL,
  FOREIGN KEY (book_isbn) REFERENCES books (isbn),
  FOREIGN KEY (author_id) REFERENCES authors (id)
  );

CREATE TABLE IF NOT EXISTS books_store (
  book_isbn VARCHAR(13) NOT NULL,
  copies SMALLINT NOT NULL,
  FOREIGN KEY (book_isbn) REFERENCES books (isbn)
);

CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(31) NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS borrowed_books (
  id SERIAL PRIMARY KEY,
  book_isbn VARCHAR(13) NOT NULL,
  client_id INT NOT NULL, 
  borrow_date DATE NOT NULL,
  FOREIGN KEY (book_isbn) REFERENCES books (isbn),
  FOREIGN KEY (client_id) REFERENCES clients (id)
);

CREATE TABLE IF NOT EXISTS books_ratings (
  book_isbn VARCHAR(13) NOT NULL,
  borrow_count SMALLINT NOT NULL,
  FOREIGN KEY (book_isbn) REFERENCES books (isbn)
);
