-- Active: 1699100471406@@0.0.0.0@3306
--> Database Creating

CREATE DATABASE mealsharing;

USE mealsharing;

CREATE TABLE meals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    meal_when DATETIME,
    max_reservations INT,
    price DECIMAL(10,2),
    created_date DATE
);

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
);


-- add meals
INSERT INTO meals (title, description, location, meal_when, max_reservations, price, created_date)
VALUES
('Chicken Alfredo', 'Creamy pasta with grilled chicken', 'Italian Restaurant', '2023-11-26 19:00:00', 12, 18.99, '2023-11-21'),
('Vegetarian Stir Fry', 'Fresh vegetables stir-fried to perfection', 'Vegetarian Cafe', '2023-11-27 18:00:00', 8, 14.99, '2023-11-20'),
('Sushi Night', 'Assorted sushi rolls and sashimi', 'Sushi Bar', '2023-11-28 20:00:00', 15, 24.99, '2023-11-19'),
('Burger Feast', 'Gourmet burgers with a variety of toppings', 'Burger Joint', '2023-11-29 19:30:00', 10, 16.99, '2023-11-18'),
('Taco Tuesday', 'Authentic Mexican tacos with all the fixings', 'Taco Truck', '2023-11-30 17:30:00', 10, 12.99, '2023-11-17');

-- add reservations
INSERT INTO reservations (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
(4, 3, '2023-11-21', '111-222-3333', 'John', 'john@example.com'),
(2, 4, '2023-11-20', '555-666-7777', 'Emma', 'emma@example.com'),
(6, 5, '2023-11-19', '999-888-7777', 'Chris', 'chris@example.com'),
(3, 1, '2023-11-18', '444-333-2222', 'Olivia', 'olivia@example.com'),
(5, 2, '2023-11-17', '777-888-9999', 'Sophia', 'sophia@example.com');

-- add reviews
INSERT INTO reviews (title, description, meal_id, stars, created_date)
VALUES
('Fantastic Sushi!', 'The sushi was incredibly fresh and delicious', 3, 5, '2023-11-26'),
('Disappointing Burger', 'Expected more from the burger joint', 4, 2, '2023-11-25'),
('Lovely Vegetarian Options', 'Great place for vegetarians', 5, 4, '2023-11-24'),
('Chicken Alfredo Delight', 'Creamy goodness in every bite', 1, 4, '2023-11-23'),
('Taco Tuesday Fun', 'Delicious tacos and a fun atmosphere', 2, 5, '2023-11-22');