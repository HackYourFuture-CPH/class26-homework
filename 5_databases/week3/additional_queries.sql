-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 30;


-- Get meals that still has available reservations
SELECT meal.id, meal.title, meal.max_reservations, COUNT(reservation.id) AS reservations_taken
FROM meal
LEFT JOIN reservation ON meal.id = reservation.meal_id
GROUP BY meal.id
HAVING meal.max_reservations > COUNT(reservation.id) OR COUNT(reservation.id) IS NULL;


-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT title
FROM meal
WHERE title LIKE "Classic French%" ;


-- Get meals that has been created between two dates
SELECT id,title,created_date
FROM meal
WHERE  meal.created_date >= ' 2023-01-01'
AND meal.created_date <= '2023-11-05';


-- Get only specific number of meals fx return only 2 meals
SELECT * 
FROM meal 
LIMIT 0,2;


-- Get the meals that have good reviews
SELECT meal.id, meal.title, AVG(review.stars) AS average_stars
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.id, meal.title
HAVING AVG(review.stars) >= 3
LIMIT 2;

-- Get reservations for a specific meal sorted by created_date
SELECT meal.id, meal.title, reservation.created_date, reservation.meal_id
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.id=3
ORDER BY reservation.created_date ASC;


-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, AVG(review.stars) AS average_stars
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.id, meal.title
ORDER BY average_stars DESC;