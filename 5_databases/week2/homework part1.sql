--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (id, title, description, created, updated, due_date, status_id)
 VALUES (50, "Learn web development", "HTML, CSS, JS, React,etc", "2023-11-15 11:14:00", "2023-11-15 11:14:00", "2024-04-30 11:14:00" ,2 );

--Change the title of a task
UPDATE task
SET title = "Completed web development"
WHERE id = 50;

--Change a task due date
UPDATE task
SET due_date = "2024-06-30 11:14:00"
WHERE id = 50;

--Change a task status
UPDATE task
SET status_id = 2
WHERE id = 50;

--Mark a task as complete
UPDATE task
SET status_id = "3"
WHERE id = 4;

--Delete a task
DELETE FROM task
WHERE id = 50;