-- Get all meals
SELECT * FROM meal;


-- Add a new meal
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES(4, 'Mexican Fiesta: Tacos and Guacamole', 'Treat yourself to a taste of Mexico with flavorful tacos, fresh guacamole, and vibrant salsa.', 'Colorful Cantina, Main Street', '2024-01-15 17:00:00', '10', '20.00', '2023-12-01');


-- Get a meal with any id, fx 1
SELECT * FROM meal
WHERE id=3;


-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET `title` = 'Sushi Extravaganza at Chef\'s Table',  `description` = 'Embark on a culinary journey with an exclusive sushi night featuring a variety of handcrafted sushi rolls.'
WHERE id= 2;


-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 2;
