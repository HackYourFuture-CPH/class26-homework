-- Active: 1699188605886@@0.0.0.0@3306@homework3

CREATE TABLE
    `Reservation` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `number_of_guests` int(10) NOT NULL,
        `meal_id` int(10) NOT NULL,
        `created_date` DATE,
        `contact_phonenumber` VARCHAR(255),
        `contact_name` VARCHAR(255),
        `contact_email` VARCHAR(255)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

    CREATE TABLE
    `Meal` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `title` VARCHAR(255) NOT NULL,
        `description` TEXT,
        `location` VARCHAR(255),
        `when` DATETIME,
        `max_reservations` INT(10),
        `price` DECIMAL(5,2),  
        `created_date` DATE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


     CREATE TABLE
    `Review` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `title` VARCHAR(255) NOT NULL,
        `description` TEXT,
        `meal_id` INT(10),
        `stars` INT(10), 
        `created_date` DATE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Meal Queries
SELECT *
FROM `Meal`

INSERT INTO Meal (title, description, location, when, max_reservations, price, created_date)
VALUES ('Milanesa Napolitana', 'Breaded beef or chicken topped with tomato sauce, ham, cheese.', 'Buenos Aires', '2023-11-21 18:00:00', 10, 25.99, '2023-11-21');

SELECT * 
FROM Meal 
WHERE id = 1;

UPDATE Meal
SET  price = 77.90
WHERE id = 1;

DELETE 
FROM Meal 
WHERE id = 1;

-- Reservation Queries
SELECT * 
FROM `Reservation`;

INSERT INTO Reservation (id,number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
VALUES(1, '2', '2024-06-01 20:00:00', '+54 1812 2022', 'Lionel', 'LioM10@gmail.com', '3');

SELECT * 
FROM `Reservation`
WHERE id=1;

UPDATE `Reservation`
SET number_of_guests = 10
WHERE id=1;

DELETE from `Reservation` 
WHERE id=1;


-- Reviews Queries
SELECT * 
FROM `Review`;

INSERT INTO `Review` (id,title, description, meal_id, stars, created_date)
VALUES(1, 'Milanesas', 'A delightful blend of perfectly seasoned meat and a golden, crispy coating, delivering a tantalizing taste experience', 1, 4, '2023-01-29 11:00:00');

SELECT * 
FROM `Review`
WHERE id=1;

UPDATE `Review`
SET stars =5
WHERE id=1;

DELETE from `Review`
WHERE id=1;

-- Additional Queries 

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Milanesa Napolitana', 'Breaded beef or chicken topped with tomato sauce, ham, cheese.', 'Buenos Aires', '2023-11-21 18:00:00', 10, 25.99, '2023-11-21');

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Empanadas', 'savory stuffed pastries, typically filled with various ingredients such as meat, cheese, or vegetables, and baked or fried', 'Buenos Aires', '2023-09-21 15:00:00', 5, 5.99, '2022-06-11');

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Stegt flæsk med persillesovs', 'Fried pork belly with parsley sauce, served with boiled potatoes.', 'Roskilde', '2023-05-25 12:00:00', 8, 15.99, '2023-01-15');

-- reservations
INSERT INTO Reservation (id,number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
VALUES(1, '1', '2024-06-01 20:00:00', '+54 1812 2022', 'Lionel', 'LioM10@gmail.com', '1');

INSERT INTO Reservation (id,number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
VALUES(2, '7', '2024-01-29 20:30:00', '+966 7007 0770', 'Cristiano', 'CR7@gmail.com', '2');

INSERT INTO Reservation (id,number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
VALUES(3, '9', '2024-06-01 20:00:00', '+47 2023 0009', 'Erling', 'Viking@gmail.com', '3');

-- review
INSERT INTO `Review` (id,title, description, meal_id, stars, created_date)
VALUES(1, 'Milanesas', 'A delightful blend of perfectly seasoned meat and a golden, crispy coating, delivering a tantalizing taste experience', 1, 5, '2023-01-29 11:00:00');

INSERT INTO `Review` (id,title, description, meal_id, stars, created_date)
VALUES(2, 'Empanadas', 'These empanadas boasted a delightful fusion of flavors within their golden, crispy pastry, a true culinary delight.', 2, 4, '2023-05-10 14:00:00');

INSERT INTO `Review` (id,title, description, meal_id, stars, created_date)
VALUES(3, 'Stegt flæsk med persillesovs', 'Crispy, perfectly paired with creamy parsley sauce, a quintessential Danish comfort dish', 3, 3, '2023-06-06 18:00:00');


-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM Meal
WHERE price < 10;


-- Get meals that still has available reservations
SELECT title, max_reservations
FROM Meal
JOIN Reservation ON Meal.id = Reservation.meal_id
GROUP BY Meal.id
HAVING Meal.max_reservations > COUNT(Reservation.id);

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM Meal
WHERE title LIKE "%persille%" ;


-- Get meals that has been created between two dates
SELECT *
FROM Meal
WHERE  Meal.created_date >= '2020-01-01'
AND Meal.created_date <= '2023-11-05';


-- Get only specific number of meals fx return only 2 meals
SELECT * 
FROM Meal 
LIMIT 2;


-- Get the meals that have good reviews
SELECT *
FROM `Meal`
JOIN Review ON Meal.id = Review.meal_id
WHERE Review.stars > 3


-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM Meal
JOIN Reservation ON Meal.id = Reservation.meal_id
WHERE Meal.title LIKE "Mila%"
ORDER BY Reservation.created_date ASC;


-- Sort all meals by average number of stars in the reviews
SELECT Meal.title, AVG(Review.stars)
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.title
ORDER BY AVG(Review.stars) DESC;