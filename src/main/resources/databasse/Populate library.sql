INSERT INTO users (name, password) 
VALUES ('demius','yfujhirtcbltkrjhjkm'),
       ('marivanna','ytdpkjvftim'),
       ('vasea','vjqgfhjkm');

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