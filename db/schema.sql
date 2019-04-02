DROP DATABASE IF EXISTS eventdb;
CREATE DATABASE eventdb;

USE eventdb;

CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(255) NOT NULL,
	wage INT NOT NULL,
	image VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
