use homwwork3;
--1--
SELECT*
FROM `Reservation`;
--2--
INSERT into Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(1, 10, 2, '2023-09-03', '+4528382639', 'nada_jrad', 'ada@gmail.com');
INSERT into Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(2, 12, 3, '2023-12-02', '+4528452639', 'jannah', 'jannah@gmail.com');
INSERT into Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(3, 12, 3, '2023-12-12', '+4528452639', 'jannah', 'jannah@gmail.com');
--3--
SELECT*
from `Reservation`
WHERE id = 1;

--4 --
UPDATE `Reservation`
SET id = 3
WHERE id = 1;

--5 --
UPDATE `Reservation`
SET number_of_guests = 15
WHERE number_of_guests = 12;

--6 --
DELETE FROM `Reservation`
WHERE id = 3;