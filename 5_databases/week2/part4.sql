CREATE DATABASE restaurant;

USE restaurant;

CREATE TABLE waiters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  salary VARCHAR(255) NOT NULL,
  job_shift DATETIME NOT NULL,
  starting_date DATETIME NOT NULL,
  phone VARCHAR(255) UNIQUE NOT NULL,
  address VARCHAR(255)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  phone_number VARCHAR(255) UNIQUE,
  address VARCHAR(255)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE menu_list (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  type VARCHAR(255),
  description VARCHAR(255),
  status VARCHAR(255)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE orders (
  order_id INT,
  customer_id INT,
  waiter_id INT,
  menu_list_id INT,
  order_description VARCHAR(255),
  PRIMARY KEY (order_id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (waiter_id) REFERENCES waiters(id),
  FOREIGN KEY (menu_list_id) REFERENCES menu_list(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
