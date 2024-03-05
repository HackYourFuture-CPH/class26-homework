-- Active: 1699100471406@@0.0.0.0@3306
----> Queries
--> Meal
SELECT *
FROM meals


INSERT INTO meals (title, description, location, meal_when, max_reservations, price, created_date)
VALUES ('Shashlyk', 'Pork meat with onions on fire', 'Georgian restaurant', '2023-11-30 18:45:00', '14', '10.00', '2023-11-22')


SELECT *
FROM meals
WHERE id = 1

UPDATE meals 
SET title = 'Kebab'
WHERE id = 6;


DELETE 
FROM meals
WHERE id = 1;

--> Reservation

SELECT *
FROM reservations

INSERT INTO reservations (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 2, '2023-11-28', '555-555-5555', 'Alex', 'alex@example.com');

SELECT * 
FROM reservations
WHERE id = 1

UPDATE reservations
SET number_of_guests = 8 
WHERE id = 1

DELETE
FROM reservations
WHERE id = 1


--> Review
SELECT *
FROM reviews


INSERT INTO reviews (title, description, meal_id, stars, created_date)
VALUES ('Great dish!', 'Really delicious dish, will definitely be back!', 2, 5, '2023-11-30');

SELECT * 
FROM reviews
WHERE id = 1

UPDATE reviews
SET title = 'I have never eaten anything tastier'
WHERE id = 1

DELETE
FROM reviews
WHERE id = 1


--> Additional queries

SELECT * 
FROM meals
WHERE price < 15

SELECT meals.* 
FROM meals
JOIN reservations ON meals.id = reservations.meal_id
WHERE reservations.created_date < meals.meal_when
AND reservations.number_of_guests < meals.max_reservations;

SELECT *
FROM meals
WHERE title LIKE 'Sushi%'

SELECT *
FROM meals
WHERE created_date BETWEEN '2023-11-20' AND '2023-11-25'

SELECT * 
FROM meals LIMIT 4;

SELECT meals.*
FROM meals
JOIN reviews ON meals.id = reviews.meal_id
WHERE reviews.stars >= 4
GROUP BY meals.id;

SELECT * 
FROM reservations 
WHERE meal_id = 2 
ORDER BY created_date;

SELECT meals.*, AVG(reviews.stars) AS avg_stars
FROM meals
LEFT JOIN reviews ON meals.id = reviews.meal_id
GROUP BY meals.id
ORDER BY avg_stars DESC;