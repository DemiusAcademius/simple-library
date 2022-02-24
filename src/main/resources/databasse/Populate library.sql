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
INSERT INTO authors (first_name,last_name) VALUES ('Карло','Ровелли');
INSERT INTO authors (first_name,last_name) VALUES ('Аркадий и Борис','Стругацкие');
INSERT INTO authors (first_name,last_name) VALUES ('Айн','Рэнд');
INSERT INTO authors (first_name,last_name) VALUES ('Роберт','Кийосаки');
INSERT INTO authors (first_name,last_name) VALUES ('Филип','Зимбардо');

INSERT INTO publishers (name) VALUES ('Манн, Иванов и Фербер');
INSERT INTO publishers (name) VALUES ('Corpus');
INSERT INTO publishers (name) VALUES ('Ардис');
INSERT INTO publishers (name) VALUES ('Альпина Диджитал');
INSERT INTO publishers (name) VALUES ('Попурри');

INSERT INTO books VALUES ('9785000575369','Интерстеллар: наука за кадром', 1, 2014, 'https://www.litres.ru/kip-torn/interstellar-nauka-za-kadrom/chitat-onlayn/');
INSERT INTO books VALUES ('9785171149857','Срок времени', 2, 2017, 'https://www.litres.ru/karlo-rovelli/srok-vremeni/chitat-onlayn/');
INSERT INTO books VALUES ('4607031764114','Понедельник начинается в субботу', 3, 2017, 'https://cv8.litres.ru/pub/c/audiokniga/cover_415/3956285-arkadiy-i-boris-strugackie-ponedelnik-nachinaetsya-v-subbotu-3956285.jpg');
INSERT INTO books VALUES ('9785961420043','Атлант расправил плечи', 4, 2012, 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/4236675-ayn-rend-atlant-raspravil-plechi.jpg');
INSERT INTO books VALUES ('9789851523241','Богатый папа, бедный папа', 5, 2015, 'https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_415/119256-robert-kiyosaki-bogatyy-papa-bednyy-papa.jpg');
INSERT INTO books VALUES ('9785001396864','Эффект Люцифера. Почему хорошие люди превращаются в злодеев', 4, 2022, 'https://cv3.litres.ru/pub/c/audiokniga/cover_415/67229830-filip-zimbardo-effekt-lucifera-pochemu-horoshie-ludi-prevraschaut-67229830.jpg');

INSERT INTO book_authors VALUES ('9785000575369', 1);
INSERT INTO book_authors VALUES ('9785171149857', 2);
INSERT INTO book_authors VALUES ('4607031764114', 3);
INSERT INTO book_authors VALUES ('9785961420043', 4);
INSERT INTO book_authors VALUES ('9789851523241', 5);
INSERT INTO book_authors VALUES ('9785001396864', 6);
