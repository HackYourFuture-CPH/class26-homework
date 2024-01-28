-- Active: 1699628373418@@127.0.0.1@3306@hyf_lesson1

-- 1.Find out how many tasks are in the task table
SELECT count (*)
FROM task;

-- 2.Find out how many tasks in the task table do not have a valid due date
SELECT count (*)
FROM task
WHERE due_date <= NOW();


-- 3.Find all the tasks that are marked as done
SELECT *
FROM task
WHERE status_id = 3;


-- 4.Find all the tasks that are not marked as done
SELECT *
FROM task
WHERE status_id != 3;


-- 5.Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;


-- 6.Get the single most recently created task
SELECT MAX (CREATED)
FROM task;


-- 7.Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task;


-- 8.Get the title and status (as text) of all tasks
SELECT task.title, status.name
FROM task, status;


-- 9.Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS status_name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.name;


-- 10.Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS status_name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.name
ORDER BY task_count DESC;


