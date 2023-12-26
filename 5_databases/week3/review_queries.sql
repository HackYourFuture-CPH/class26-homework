USE meal_sharing;

-- Get all reviews
SELECT * FROM review;


-- Add a new review
INSERT INTO review (id,title, description, stars, created_date, meal_id)
VALUES(4, 'Pudding!', 'Indulge in this creamy caramel pudding.', '6', '2023-12-25 14:31:00', '4');


-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id=2;


-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET `title` = 'Caramel dessert',  `meal_id` = '3'
WHERE id= 4;


-- Delete a review with any id, fx 1
DELETE from review
WHERE id= '3';