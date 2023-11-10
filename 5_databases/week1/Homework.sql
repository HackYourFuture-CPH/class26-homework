-- Find out how many tasks are in the task table
Select COUNT (*) 
from task;


-- Find out how many tasks in the task table do not have a valid due date
SELECT 
(SELECT  COUNT (*) from task)-(SELECT COUNT( due_date) from task);


-- Find all the tasks that are marked as done
Select task.title,task.status_id
FROM task JOIN status ON task.status_id= status_id 
WHERE status_id LIKE 3;


-- Find all the tasks that are not marked as done
Select task.title,task.status_id, status_id
FROM task JOIN status ON task.status_id= status_id 
WHERE status_id NOT LIKE 3  ;


-- Get all the tasks, sorted with the most recently created first
SELECT * 
FROM task
ORDER BY task.created DESC;


-- Get the single most recently created task
SELECT *
FROM task
ORDER BY task.created DESC LIMIT 1;


-- Get the title and due date of all tasks where the title or description contains database
SELECT title,description,due_date 
FROM task
where title LIKE "%databases%" OR description LIKE "%databases%" ;


-- Get the title and status (as text) of all tasks
SELECT task.title,status.name
FROM task INNER JOIN status ON task.status_id = status.id ;


-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.name;


-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.id
ORDER BY task_count DESC,status.name;