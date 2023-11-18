
--Find out how many tasks are in the task table
SELECT count(*)
FROM task

--Find out how many tasks in the task table do not have a valid due date
SELECT count(*)
FROM task 
WHERE due_date IS NULL

--Find all the tasks that are marked as done
SELECT *
FROM task JOIN status ON task.status_id = status.id
WHERE status.name = "Done";

--Find all the tasks that are not marked as done
SELECT *
FROM task JOIN status ON task.status_id = status.id
WHERE status.name != "Done";

--Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;

--Get the single most recently created task
SELECT max(created)
FROM task 

--Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task 
WHERE title LIKE "%database%" OR description LIKE "%database%"

--Get the title and status (as text) of all tasks
SELECT task.title, status.name
FROM task JOIN status ON task.status_id = status.id;

--Get the name of each status, along with a count of how many tasks have that status
SELECT count(status.id), status.name
FROM status JOIN task ON task.status_id = status.id
GROUP BY status.name;

--Get the names of all statuses, sorted by the status with most tasks first
SELECT count(status.id), status.name
FROM status JOIN task ON task.status_id = status.id
GROUP BY status.name 
ORDER BY count(status.id) DESC;