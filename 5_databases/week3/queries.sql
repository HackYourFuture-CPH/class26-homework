-- Active: 1699540080106@@0.0.0.0@3306@mealsharing

    ---- Meal ----

--Get all meals
select *
FROM meal;

--Add a new meal
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, reated_date)
VALUES(3, "Naan", "Indian bread with garlic and butter", "Indian Royal", "2023-12-10 14:21:00", 5, "90", "2023-07-11");

--Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE meal.id = 1;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = "Shahi veg dum biryani", description = " Rice with royal indian spices and vegetables", price = "280"
WHERE meal.id = 1;

--Delete a meal with any id, fx 1
DELETE meal
FROM meal
WHERE meal.id = 1;


    ---- Reservation -----

--Get all reservations
SELECT *
FROM reservation;

--Add a new reservation
INSERT INTO reservation ( id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email )
VALUES(3, "3", "2", "2023-09-05 18:21:00", "+45 86535678", "Ridha", "ridha@gmail.com" );

--Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE reservation.id = 1;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = "3", meal_id = "3"
WHERE reservation.id = 1;

--Delete a reservation with any id, fx 1
DELETE reservation
FROM reservation
WHERE reservation.id = 1;


    ----- Review -----

--Get all reviews
SELECT *
FROM review;

--Add a new review
INSERT INTO review (id, title, description, meal_id, stars, created_date )
VALUES(3, "Bestever butter naan", "the taste was delicious", "3", 5, "2023-06-22 10:21:00");

--Get a review with any id, fx 1
SELECT *
FROM review
WHERE review.id = 3;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = "Superlicious", description = "The most delicious naan I ever had"
WHERE review.id = 3;

--Delete a review with any id, fx 1

DELETE review
FROM review
WHERE review.id = 3;


    ------ Additional queries -------







