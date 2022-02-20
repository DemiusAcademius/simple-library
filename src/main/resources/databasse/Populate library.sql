INSERT INTO users (name, password) 
VALUES ('demius',   '$2a$10$IVKyblCR8dxUtfvmxAM8euMlhL7gFsylISYp/7C01CRyPSDwOrKKu'), -- very-simple-pw in BCrypt
       ('marivanna','$2a$10$ErGvFMz0sQqFQ8tVL6.l.u5BRwUPLWAciHneThRJpdCjWeAgd6P6S'), -- marivanna10
       ('vasea',    '$2a$10$/zGV.EAmsHOiyBqxTxzYOOwGmozx4yDCW1dsFUeIgVp8PE8QxyyPS'); -- vasea-pupkin

INSERT INTO authorities (name) 
VALUES ('Administrator'),
       ('Librarian'),
       ('Client');

INSERT INTO user_authorities VALUES (1, 1), (1,2), (2,2), (3,3);

INSERT INTO clients 
  (first_name, last_name, address, phone, user_id) 
VALUES
('Vassily', ' Petrov', 'Chisinau, Traian 10, ap 1', '+7 (191) 322-22-33)', 3),
('Pjotr', ' Vasechkin', 'Novosibirsc, Kosmonavtov 6, ap 100', '+7 (191) 223-33-22)', NULL);

INSERT INTO authors (first_name,last_name) VALUES ('Кип','Торн');

INSERT INTO publishers (name) VALUES ('Манн, Иванов и Фербер');

INSERT INTO books VALUES ('9785000575369','Интерстеллар: наука за кадром', 1, 2014, 'https://www.litres.ru/kip-torn/interstellar-nauka-za-kadrom/chitat-onlayn/');

INSERT INTO book_authors VALUES ('9785000575369', 1);