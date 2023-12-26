-- Get all reservations
SELECT * FROM reservation;


-- Add a new reservation
INSERT INTO reservation (id,number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
VALUES(4, '4', '2025-02-23 12:45:00', '+91 12345 67890', 'Rachel', 'rachel@ymail.com', '1');


-- Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id=1;


-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET `number_of_guests` = '10',  `meal_id` = '3'
WHERE id= 2;



-- Delete a reservation with any id, fx 1
DELETE from reservation 
WHERE id= '4';