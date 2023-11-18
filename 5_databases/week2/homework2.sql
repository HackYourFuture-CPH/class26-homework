USE hyf_lesson1;
--1--
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Wash the other car', 'well', '2017-10-04 18:07:37', '2017-10-14 16:01:31', '2017-12-05 19:42:15', 2, 3);

--2--
UPDATE task
SET title = 'New life'
WHERE title = 'Become a billionaire';

--3-- 
 UPDATE task
 SET due_date = '2023-12-31 21:14:45'
 WHERE id = 3;

 --4--
 UPDATE task
SET status_id = 3
WHERE id = 1;
--5--
UPDATE status
SET status.name = 'Completed'
WHERE status.id = 3;

--6-- 
DELETE FROM task
WHERE id = 21;