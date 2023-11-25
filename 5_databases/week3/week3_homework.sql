-- Active: 1698992883180@@127.0.0.1@3306@week3_homework
--MEAL
--1.Get all meals

SELECT * FROM meal;

DELETE FROM meal WHERE id IN (6, 7, 8, 9, 10);

--2Add a new meal

INSERT INTO meal (title, description, location, meal_when, max_reservations, price, created_date)
VALUES
('Fish and Chips','A hearty meal enjoyed in the wizard world as well','Sweden','2024-03-11 08:00:00',6,14.00,'2023-12-11 11:00:00');

--3.Get a meal with any id, fx 1

SELECT * FROM
meal
WHERE id=3;

--4.Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET title='Pumpkin Pasties' ,
    description='Flaky pastry filled with a spiced pumpkin mixture',
    price='11.00'
WHERE id=3;

--5.Delete a meal with any id, fx 1

DELETE FROM meal
WHERE id=11;

--RESERVATION

--1.Get all reservations

SELECT * FROM Reservation;

--2.Add a new reservation

INSERT INTO Reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
(6,2,1,'2023-11-25 14:00:00','123 406 789','Draco Malfoy','malfoy@example.com');

--3.Get a reservation with any id, fx 1

SELECT * FROM Reservation
WHERE ID=4;

--4.Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Reservation
SET number_of_guests=6, 
    meal_id=1,
    contact_phonenumber='264 891 232'
WHERE id=4;

--5.Delete a reservation with any id, fx 1

DELETE FROM Reservation
WHERE id=6

--REVIEWS
--1.Get all reviews

SELECT * FROM Review;

--2Add a new review

INSERT INTO Review (id, title, description, meal_id, stars, created_date)
VALUES
(6,'Great','Food was very good',3,4,'2023-11-21 08:00:00');

--3Get a review with any id, fx 1

SELECT * FROM Review
WHERE id=2;

--4.Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Review
SET title='Bad', 
    description='Food was very bad',
    stars=1
WHERE id=2;

--5.Delete a review with any id, fx 1

DELETE FROM Review
WHERE id=6

--Additional queries  

--1.Get meals that has a price smaller than a specific price fx 90

SELECT * FROM meal
WHERE price < 12;

--2.Get meals that still has available reservations


SELECT meal.id,meal.title,meal.max_reservations,COUNT(Reservation.id) AS total_reservations
FROM meal 
LEFT JOIN Reservation ON meal.id = Reservation.meal_id
GROUP BY meal.id
HAVING COUNT(Reservation.id) < meal.max_reservations;

--3.Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM meal
WHERE title LIKE '%pumpkin%';

--4.Get meals that has been created between two dates

SELECT * FROM meal
WHERE created_date BETWEEN '2023-11-21 08:00:00' AND '2023-11-25 14:00:00';

--5.Get only specific number of meals fx return only 5 meals

SELECT * FROM meal
LIMIT 3;

--6.Get the meals that have good reviews

SELECT meal.title, Review.stars
FROM meal
JOIN Review ON meal.id = Review.meal_id
WHERE Review.stars > 3;

--7.Get reservations for a specific meal sorted by created_date

SELECT * FROM Reservation
WHERE meal_id=1
ORDER BY created_date;

--8.Sort all meals by average number of stars in the reviews

SELECT meal.id,meal.title, AVG(Review.stars) AS avg_stars
FROM meal
JOIN Review ON meal.id = Review.meal_id
GROUP BY meal.id,meal.title
ORDER BY avg_stars DESC;

