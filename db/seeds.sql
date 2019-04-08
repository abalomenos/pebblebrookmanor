USE eventdb;

INSERT INTO employees (name, wage, image, createdAt, updatedAt)
VALUES   ('Peggy Kane', '23', 'https://randomuser.me/api/portraits/women/1.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Julie Castaneda', '22', 'https://randomuser.me/api/portraits/women/2.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Andrew Werner', '23', 'https://randomuser.me/api/portraits/men/8.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('William Reynolds', '23', 'https://randomuser.me/api/portraits/men/9.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Sally Vaughan', '23', 'https://randomuser.me/api/portraits/women/3.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Maria Wu', '25', 'https://randomuser.me/api/portraits/women/4.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Todd Spears', '23', 'https://randomuser.me/api/portraits/men/3.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Donald Pugh', '25', 'https://randomuser.me/api/portraits/men/4.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Tony Leonard', '26', 'https://randomuser.me/api/portraits/men/5.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Tina Ryan', '27', 'https://randomuser.me/api/portraits/women/5.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Laurie Marshall', '22', 'https://randomuser.me/api/portraits/women/6.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Doris Moore', '24', 'https://randomuser.me/api/portraits/women/7.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Fiona Rubio', '24', 'https://randomuser.me/api/portraits/women/8.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Janae Pearson', '23', 'https://randomuser.me/api/portraits/women/9.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Mary Ball', '22', 'https://randomuser.me/api/portraits/women/10.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Ben Turner', '22', 'https://randomuser.me/api/portraits/men/1.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('James Carter', '24', 'https://randomuser.me/api/portraits/men/2.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Freddie Mckinney', '24', 'https://randomuser.me/api/portraits/men/6.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Philip Soto', '22', 'https://randomuser.me/api/portraits/men/7.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('Harold Wells', '22', 'https://randomuser.me/api/portraits/men/10.jpg', '2019-04-08 01:35:08', '2019-04-08 01:35:08');

INSERT INTO events (eventDate, customerName, customerEmail, roomName, partySize, createdAt, updatedAt)
VALUES   ('04-11-2019', 'John Smith', 'johnsmith@gmail.com', 'Brandview', '300', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('04-12-2019', 'James Reeves', 'Jamesreeves@gmail.com', 'Glenoaks', '350', '2019-04-08 01:35:08', '2019-04-08 01:35:08'),
         ('04-12-2019', 'Jen Rivera', 'Jenrivera@gmail.com', 'Le Foyer', '400', '2019-04-08 01:35:08', '2019-04-08 01:35:08');
