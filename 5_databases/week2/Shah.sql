--1. Add a task  with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Be good', 'Stop beating your husband', 'created', 'updated', 'due_date', 'status_id', 'user_id');

--2. Change the title of a task
UPDATE task
set title = "Sleep"
where title = "Wash clothes";


SELECT *
from task;

--3. Change a task due date
UPDATE task
SET due_date = 2017-10-15 13:05:09
WHERE title = 'Wash clothes';

--4. Change a task status
UPDATE status
SET name = 'Yet to begin'
WHERE name = 'Not started';

--5. Mark a task as complete
UPDATE task
SET status_id = 3
WHERE title = 'Wash clothes';

--6. Delete a task
DELETE FROM task
WHERE title = 'Wash clothes';

