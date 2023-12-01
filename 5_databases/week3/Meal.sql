use homework3;
--1 Get all meals--
SELECT*
from `Meal`;
--2 ADD new meal --
INSERT into Meal (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES(1,'couscous','spicy','Tunisia','2023-09-10','10','60','2023-09-20');
INSERT into Meal (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES(2,'sushi','crispy','japon','2023-04-10','30','50','2023-09-10');
INSERT into Meal (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES(3,'pizza','tomato','italy','2023-02-10','3','20','2023-09-20');
INSERT into Meal (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES(4,'Rød grød med','meduim','Denmark','2023-03-10','3','20','2023-09-10');
--3 Get a meal with any id--
SELECT*
from `Meal`
WHERE id = 1;

--4 update a meal any id --
UPDATE `Meal`
SET id = 2
WHERE id = 1;

--5 update a meal any attribute --
UPDATE `Meal`
SET title = 'spaghetti'
WHERE title = 'couscous';

--6 delete a meal with any id --
DELETE FROM `Meal`
WHERE id = 2;
