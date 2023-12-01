-- Active: 1699188605886@@0.0.0.0@3306@hyf_lesson1

insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (36, 'Catch every Pokemon', 'Catch them all', '1997-04-01 06:54:16', '2023-03-24 13:05:09', null, 2, 3);

UPDATE task
SET title = "Become a trillionaire"
WHERE id = 1

UPDATE task
SET due_date = "2023-11-16 07:58:03"
WHERE id = 1

UPDATE task
SET status_id = 2
WHERE id = 10

UPDATE task
SET status_id = 3
WHERE id = 18

DELETE FROM task WHERE id = 24