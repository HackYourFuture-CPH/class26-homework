USE week3_1;

-- Get all meals
SELECT *
from meal;

-- Add a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) VALUES 
('Elephant brain', 'it will be a starter', 'North Korea', '2024-10-25 06:54:16', 8, 200.50, '2023-09-10 11:05:05');

-- Get a meal with any id, fx 1
SELECT *
from meal
WHERE id = 1;

-- Update a meal. Update any attribute fx the title or multiple attributes
UPDATE meal
SET location = 'Berlin'
WHERE price >= 200;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 8;

-- Get all reservations
SELECT *
from reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES 
(6, 2, '2023-09-09 10:08:07', `22042021`, 'Golf', 'golf@gmail.com');

-- Get a reservation with any id, fx 1

SELECT *
from reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET contact_phonenumber = '206790'
WHERE id = 2 AND contact_email LIKE '%gmail%';


-- Delete a reservation
DELETE FROM reservation
WHERE id = 3;

-- Get all reviews
SELECT *
from review;

-- Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date) VALUES 
('You will regret it', 'The food is awful', 1, 0, '2025-10-01 06:10:16');

-- Get a review with any id, fx 1
SELECT *
from review
WHERE id =1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'Everyone should try it',
    description = 'This is where we make the most money',
    meal_id = 1,
    stars = 5,
    created_date = '2023-10-01 03:06:10'
WHERE id = 1;

-- Delete a review with an invalid create date
DELETE FROM review
WHERE YEAR(created_date) >= 2025;

-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT *  
FROM meal  
WHERE max_reservations > (
    SELECT COALESCE(SUM(number_of_guests), 0)
    FROM reservation 
    WHERE meal_id = meal.id
);


-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
from meal
WHERE title LIKE "%lamb%";

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2023-10-01' AND '2023-10-31';  

-- Get only specific number of meals fx return only 5 meals

-- Get the meals that have good reviews

SELECT meal.title, review.stars
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3;

-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
WHERE meal_id = 1
ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, AVG(review.stars) AS avg_stars
FROM meal
LEFT JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY avg_stars DESC;

