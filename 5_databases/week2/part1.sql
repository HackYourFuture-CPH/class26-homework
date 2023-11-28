-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (id, title, description, created, updated, due_date, status_id) 
VALUES (NULL, 'Become a developer', 'Work hard', '2017-10-06 04:03:52', '2017-09-20 19:34:43', '2017-12-22 20:58:03', 2);

-- Change the title of a task 
UPDATE task
SET title = 'go to hyf'
WHERE id = 1; 

-- Change a task due date 

UPDATE task
SET due_date = '2020-12-01 13:28:35'
WHERE id = 2; 

-- Change a task status 
UPDATE task
SET status_id = 1
WHERE id = 16; 

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 16; 

-- Delete a task 
DELETE FROM task
WHERE id = 16; 
