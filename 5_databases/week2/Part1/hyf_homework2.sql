-- Active: 1698992883180@@127.0.0.1@3306@hyf_homework2
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO user (id, name, email, phone)
VALUES (13, 'Nishadi', 'nish@example.com', '123-456-7890');

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Cooking dinner', 'Try an Asian dish', NOW(), NOW(), DATE_ADD(NOW(), INTERVAL 1 DAY), 1, 13);


SELECT* FROM task

SELECT* FROM user


--•	Change the title of a task
--•	Change a task due date
--•	Change a task status


UPDATE task
SET title ='Cook lunch',due_date='2023-12-25',status_id=2
WHERE id=47;

--•	Mark a task as complete
UPDATE task
SET status_id=3
WHERE id=47;

--Delete a task

DELETE FROM task
WHERE id=47;

