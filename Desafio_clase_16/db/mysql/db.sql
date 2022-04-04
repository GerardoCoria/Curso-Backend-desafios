CREATE DATABASE desafio_clase_16;

USE desafio_clase_16;

CREATE TABLE products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price INT(10) NOT NULL,
);

SHOW TABLES;

DESCRIBE products;