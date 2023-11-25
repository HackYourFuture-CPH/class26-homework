use homework3;

--1--
SELECT*
FROM `Review`;
--2--
INSERT into `Review` (id, title, description, meal_id, stars, created_date)
VALUES(1, 'feedback', 'good', 2, 4, '2023-11-20');
INSERT into `Review` (id, title, description, meal_id, stars, created_date)
VALUES(2, 'feedback', 'very_good', 3, 5, '2023-11-21');
--3--
SELECT*
from `Review`
WHERE id = 1;

--4 --
UPDATE `Review`
SET id = 4
WHERE id = 1;

--5 --
UPDATE `Review`
SET stars = 1
WHERE stars = null;

--6 delete a meal with any id --
DELETE FROM `Review`
WHERE id = 2;