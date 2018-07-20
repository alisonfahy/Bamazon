DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name 	VARCHAR(255),
    department_name 	VARCHAR(255),
    price DECIMAL(10,2),
    stock_quantity INT, 
    PRIMARY KEY (id)
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Duck', 'Toys', 2.5, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Shirt', 'Clothing', 30.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Bookshelf', 'Furniture', 99.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Notebook', 'Stationary', 1.99, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Toaster', 'Kitchen', 39.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Toothbrush', 'Bathroom', 0.75, 800);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Stove', 'Appliances', 800.00, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Strimmer', 'Garden', 75.50, 150);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Bandaids', 'Health', 3.25, 400);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Brownies', 'Food', 4.99, 100);