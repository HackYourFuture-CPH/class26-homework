use homework3;
--1 Get meals that has a price smaller than a specific price fx 90--
SELECT *
FROM `Meal`
WHERE price < 90;

--2 Get meals that still has available reservations--
SELECT Meal.*
FROM Meal JOIN Reservation  ON Meal.id = Reservation.meal_id
WHERE  Reservation.created_date > NOW();

--3  Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde-
SELECT *
FROM Meal
WHERE title LIKE 'Rød grød med%';

--4 meals between two date--
SELECT *
FROM Meal
WHERE created_date BETWEEN '2023-01-01' AND '2023-12-31';

--5 get limit of  number --
SELECT *
FROM Meal
WHERE created_date BETWEEN '2023-01-01' AND '2023-12-31'
LIMIT 1;

-- 6 good review --
SELECT *
FROM Review
WHERE stars >= 3; 

--7 specifique meal--
SELECT *
FROM Meal
WHERE id = 2
ORDER BY created_date;

--8 AVG rating --
SELECT Meal.*, AVG(Review.stars) AS average_stars
FROM Meal
LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id
ORDER BY average_stars DESC;
