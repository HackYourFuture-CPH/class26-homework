-- 1. Find out how many tasks are in the task table


SELECT COUNT(*) 
FROM task;

-- 2. Find out how many tasks in the task table do not have a valid due date

SELECT id, due_date
FROM task
WHERE due_date IS NULL 
   OR STR_TO_DATE(due_date, '%Y-%m-%d %H:%i:%s') IS NULL;



-- 3. Find all the tasks that are marked as done
SELECT status.name, user.id, task.description
FROM status 
left JOIN task ON status.id = task.status_id
LEFT JOIN user ON user.id = task.user_id
WHERE status.name = 'done';

-- 4. Find all the tasks that are not marked as done
SELECT status.name, user.id, task.description
FROM status 
LEFT JOIN task ON status.id = task.status_id
left JOIN user ON user.id = task.user_id
WHERE status.name <> 'done';

-- 5. Get all the tasks, sorted with the most recently created first
SELECT status.name, created
FROM task
JOIN status ON task.status_id = status.id
LEFT JOIN user ON user.id = task.user_id
ORDER BY created;

-- 6. Get the single most recently created task
SELECT status.name, created
FROM task
JOIN status ON task.status_id = status.id
LEFT JOIN user ON user.id = task.user_id
ORDER BY created DESC LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT task.title, task.description
FROM task 
WHERE task.title LIKE '%database%' OR task.description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT task.title, status.name AS status_text
FROM task
JOIN status ON task.status_id = status.id;

--9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(*) AS status_count
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first

SELECT status.name, COUNT(*) AS status_count
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.name 
ORDER BY status.name;






