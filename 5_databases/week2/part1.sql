--> Part 1: Working with tasks
INSERT INTO tasks (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Clean the room', 'You need to clean your room', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2023-11-19', 1, 1);


UPDATE tasks
SET title = 'New Title of the task'
WHERE task_id = 1;

UPDATE tasks
SET due_date = '2023-02-01'
WHERE task_id = 1;

UPDATE tasks
SET status_id = 2
WHERE task_id = 1;

UPDATE tasks
SET status_id = 3
WHERE task_id = 1;

DELETE FROM tasks
WHERE task_id = 1;