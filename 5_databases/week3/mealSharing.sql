-- Active: 1699187035090@@127.0.0.1@3306@mealSharing
CREATE DATABASE mealSharing;
USE mealSharing;

CREATE TABLE Reservation (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 number_of_guests INT NOT NULL ,
 meal_id INT NOT NULL,
 created_date DATE,
 contact_phonenumber VARCHAR(255),
 contact_name VARCHAR(255),
 contact_email VARCHAR(255) UNIQUE,
 FOREIGN KEY (meal_id) REFERENCES  Meal(id)
);

CREATE TABLE  Meal (
 id INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(250) NOT NULL,
 description TEXT,
 location VARCHAR(255),
 `when` DATETIME,
 max_reservations INT,
 price DECIMAL,
 created_date DATE
);

CREATE TABLE Review (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 title VARCHAR(255),
 description TEXT,
 meal_id INT,
 FOREIGN KEY(meal_id) REFERENCES Meal(id),
 stars INT CHECK (star BETWEEN 1 AND 5),
 created_date DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Queries
-- Get all meals
SELECT * 
FROM Meal; 

-- Add a new meal 'I added two'
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('Creamy Cauliflower strew' , 'cauliflower, corn, bell pepper, mushroom, onion', 'Copenhagen','2023-11-28 19:00:00', 2 , 18.5, '2023-11-28');

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ( 'Chicken soup' , 'chicekn, milk, oats, mushroom, corn', 'Kolding', '2023-11-28 15:00:00', 6 , 20.4, '2023-11-28');

-- Get a meal with any id, fx 1
SELECT *
FROM Meal
where id = 2;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET price = 27, created_date = '2023-11-28'
WHERE id= 1;

-- Delete a meal with any id, fx 1
DELETE 
FROM Meal 
WHERE id=1;

-- #2 Reservation queries
-- Get all reservations
SELECT * 
FROM Reservation;

-- Add a new reservation
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES ( 4 , 2 ,'2023-11-28',  null ,'Nina', Null );
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES ( 10 , 3,'2023-11-28',  004512345678 ,'Mons', 'Mons@gmail.com' );
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES ( 5 , 3,'2023-11-28',  00457654321 ,'Charlotte', 'Charlotte@gmail.com' );

-- Get a reservation with any id, fx 1
SELECT * 
FROM Reservation
WHERE id=5;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation 
SET contact_email = 'Nina@gmail.com', contact_name = 'Laura'
WHERE id=2;

-- Delete a reservation with any id, fx 1
DELETE 
FROM Reservation
WHERE id=6;

-- #3 Review queries
-- Get all reviews
SELECT * 
FROM Review;

-- Add a new review
INSERT INTO Review(title, description, meal_id, stars, created_date) 
VALUES ('Good' ,'It was good starter but not a meal to be full with',  2 ,3, Null );
INSERT INTO Review(title, description, meal_id, stars, created_date)
VALUES ( 'Perfect' ,'I LOVED it',  2 ,5, '2023-11-28' );
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ( 'Perfect' ,'Such a great vegeterian dish! just WOW',  3 ,5, '2023-11-28' );
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ( 'Bad' ,'Not fresh ingredients!', 2, 1, '2023-11-28' );

-- Get a review with any id, fx 1
SELECT * 
FROM Review 
WHERE id = 2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET created_date= '2023-11-28', title = 'very good'
WHERE id=3;

-- Delete a review with any id, fx 1
DELETE 
FROM Review 
WHERE id=1;


-- Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
-- Adding to meal
INSERT INTO Meal (title, description, location, `when`, max_reservations, price,created_date) 
VALUES ( 'Vegetarian pizza' , 'cauliflower, corn, bell pepper, mushroom, beans, ananas', 'Arhus','2023-11-28 12:00:00', 1 , 70, '2023-11-28');
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ( 'Caesar salad' , 'Chicken breast, lettuce, tomato, cucumber, corn, bread,special sauce', 'Hviding','2023-11-28 20:00:00', 4 , 150, '2023-11-28');
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('Beans stew and rice' , 'rice , bean stew', 'Ribe','2023-11-28 18:30:00', 7 , 23.4, '2023-11-28');
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('Lasagna' , 'soya, cabbages, special sauce, corn', 'Alborg','2023-11-28 13:15:00', 5 , 26.2, '2023-11-28');

-- Adding to Reservation
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES ( 1 , 5 ,'2023-11-28',  null ,'Christine', Null );
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES ( 3 , 4,'2023-11-28',  004511223344 ,'Lise', 'Lise@gmail.com' );
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES ( 2 , 3,'2023-11-28',  004599887766 ,'Yanal', 'Yanal@gmail.com' );

-- Adding to review
INSERT INTO Review(title, description, meal_id, stars, created_date) 
VALUES ('Not Good' ,'It was salty',  5 ,2, Null );
INSERT INTO Review(title, description, meal_id, stars, created_date)
VALUES ( 'Good' ,NULL ,  7 ,5, '2023-11-28' );
INSERT INTO Review (`title`, `description`,`meal_id`, `stars`,`created_date`)
VALUES ( 'Very good' ,'very tasty ',  4 ,5, '2023-11-28' );

-- Get meals that have a price smaller than a specific price fx 90
SELECT * 
FROM Meal
WHERE price < 30;

-- Get meals that still have available reservations
SELECT * 
FROM Meal
WHERE max_Reservations > (SELECT SUM(number_of_guests)
                          FROM Reservation
                          WHERE Meal_id = Meal.id);
            
-- Get meals that partially match a title. 'Rød grød med' will match the meal with the title 'Rød grød med fløde'
SELECT * 
FROM Meal
WHERE title LIKE '%cream%';

-- Get meals that have been created between two dates
SELECT * 
FROM Meal
WHERE created_date 
BETWEEN '2023-11-25' AND '2023-12-16';

-- Get only a specific number of meals fx return only 3 meals
SELECT * 
FROM Meal
LIMIT 3;

-- Get the meals that have good reviews
SELECT  Meal.id, Meal.title, Review.title, Review.stars 
FROM Meal, Review
WHERE Review.stars > 4 AND Meal.id = Review.Meal_id;

-- Get reservations for a specific meal sorted by created_date
SELECT Meal.title, Reservation.meal_id, SUM(Reservation.number_of_guests) AS total_guests, 
                                            Reservation.created_date AS Res_created_date
FROM 
Reservation
JOIN Meal ON Meal.id = Reservation.meal_id
GROUP BY 
Meal.title, Reservation.meal_id, Reservation.created_date
ORDER BY 
Reservation.created_date;


-- Sort all meals by the average number of stars in the reviews
SELECT Meal.*, AVG(Review.stars) AS avg_stars 
FROM Meal
JOIN Review ON Meal.id= Review.Meal_id
GROUP BY Review.Meal_id
ORDER BY avg_stars;

