--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
 VALUES ("Learn web development", "HTML, CSS, JS, React,etc", "2023-11-15 11:14:00", "2023-11-15 11:14:00", "2024-04-30 11:14:00" ,"2", "1");

--Change the title of a task
UPDATE task
SET title = "Completed web development"
WHERE title = "Learn web development";

--Change a task due date
UPDATE task
SET due_date = "2024-06-30 11:14:00"
WHERE due_date = "2024-04-30 11:14:00";

--Change a task status
UPDATE task
JOIN status ON task.status_id = status.id
SET task.status_id = "3"
WHERE task.id ="35";

--Mark a task as complete
UPDATE task
SET status_id = "3"
WHERE task.id = "4";

--Delete a task
DELETE FROM task
WHERE title = "Completed web development";