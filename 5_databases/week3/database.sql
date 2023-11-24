-- Active: 1699628373418@@127.0.0.1@3306@mealSharing
CREATE TABLE RESERVATION (
 id INT(15) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
 number_of_guests INT(15) NOT NULL,
 meal_id INT(15) NOT NULL,
 created_date DATE,
 contact_phonenumber VARCHAR(255),
 contact_name VARCHAR(255) NOT NULL,
 contact_email VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE Meal (
  id INT(15) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255),
  when_date DATE,
  max_reservations INT(15) NOT NULL,
  price INT(15) NOT NULL,
  created_date DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE Review (
 id INT(15) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
 title VARCHAR(255) NOT NULL,
 description TEXT,
 meal_id INT(15) NOT NULL,
 stars INT(15) NOT NULL,
 created_date DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- MEAL Queries
-- 1.Get all meals
SELECT * 
FROM meal;


-- 2.Add a new meal
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date)
VALUES ('New Meal Title', 'New Meal Description', 'New Meal Location', '2022-12-31', 10, 20, CURDATE());


-- 3.Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id = 1;


-- 4.Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'Updated Meal Title', description = 'Updated Meal Description', location = 'Updated Meal Location', when_date = '2022-12-31', max_reservations = 10, price = 20, created_date = CURDATE()
WHERE id = 1;


-- 5.Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 1;

-- Reservation Queries
-- 1.Get all reservations
SELECT *
FROM reservation;


-- 2.Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)VALUES (5, 2, CURDATE(), '22334455', 'Sam Jones', 'samjones@gmail.com');


-- 3.Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;


-- 4.Update a reservation with any id, fx 1. Update any attribute fx the number_of_guests or multiple attributes
UPDATE reservation
SET number_of_guests = 10, meal_id = 1, created_date = CURDATE(), contact_phonenumber = '22334455', contact_name = 'Sam Jones', contact_email = 'samjones@gmail.com'


-- 5.Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;



-- Review Queries
-- 1.Get all reviews
SELECT *
FROM Review;


-- 2.Add a new review
INSERT INTO Review(title, description, meal_id, stars, created_date)
VALUES('Excellent', 'Perfect meal', 1, 5, CURDATE());


-- 3.Get a review with any id, fx 1
SELECT *
FROM Review
WHERE id = 1;


-- 4.Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET title = 'update title', description = 'update description', meal_id = 1, stars = 5, created_date = CURDATE();



-- 5.Delete a review with any id, fx 1
DELETE FROM Review
WHERE id = 1;





-- Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries

INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date)
VALUES ('FUFU', 'Delicious Starchy', 'Ghana', '2023-11-21', 10, 50.00, CURDATE()),
('Fante Fante', 'Spicey fish stew with Kenkey(made of corn)', 'Cape Coast', '2023-12-31 15:41:20', 10, 40.00, CURDATE()),
('Rød grød med fløde', 'Delicious Danish dessert', 'Copenhagen', '2023-11-22 18:00:00', 10, 80.00, CURDATE()),
('Pasta Carbonara', 'Classic Italian pasta dish', 'Rome', '2023-11-23 19:30:00', 10, 60.00, CURDATE()),
('Indonesian Meal', 'A delicious traditional Indonesian meal', 'Indonesia', '2023-12-12 13:10:00', 10, 90.00, CURDATE()),
('Sushi Night', 'Fresh Japanese sushi', 'Tokyo', '2023-11-25 20:00:00', 12, 150.00, CURDATE()),
('Burger', 'American burger', 'New York', '2023-11-28 19:11:10', 10, 150.00, CURDATE()),
('Tacos', 'Mexican tacos', 'Mexico', '2023-12-01 10:00:00', 10, 110.00, CURDATE());


INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 1, CURDATE(), '22334455', 'Sam Jones', 'samjones@gmail.com'),
(6,2, CURDATE(), '32334455', 'Peter Tosh', petertosh@gmail.com '),
(8,4, 2, CURDATE(), '9233455', 'Bob Marley', 'bobmarley@gmail.com'),
(10,3, CURDATE(), '112334455', 'Sam james', '


SELECT *
FROM meal


-- Functionality
-- 1.Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 90;


-- 2.Get meals that still has available reservations 
SELECT *
FROM meal
WHERE max_reservations > 0;


-- 3.Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE 'Rød grød med%';


-- 4.Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2023-11-21' AND '2023-11-25';


-- 5.Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 5;


-- 6.Get the meals that have good reviews
SELECT *
FROM meal
INNER JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3;



-- 7.Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
WHERE meal_id = 1
ORDER BY created_date;


-- 8.Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars) AS average_stars
FROM meal
INNER JOIN review ON meal.id = review.meal_id
GROUP BY meal.title
ORDER BY average_stars DESC;

