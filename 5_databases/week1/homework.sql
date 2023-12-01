-- Active: 1699100471406@@0.0.0.0@3306@hyf_lesson1

-- Task 1 Find out how many tasks are in the task table
SELECT COUNT (title)
FROM task

-- Task 2 Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*)
FROM task
WHERE due_date IS NULL

-- Task 3 Find all the tasks that are marked as done
SELECT *
FROM task
WHERE status_id = 3

SELECT *
FROM task JOIN status ON status.name = "Done" ;

-- Task 4 Find all the tasks that are not marked as done
SELECT *
FROM task
WHERE status_id != 3

SELECT *
FROM task JOIN status ON status.name != "Done" ;

--Task 5 Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created

-- Task 6 Get the single most recently created task
SELECT *
FROM task
ORDER BY created
LIMIT 1

-- Task 7 Get the title and due date of all tasks where the title or description contains database

SELECT title, due_date
FROM task
WHERE title LIKE "%database%"

-- Task 8 Get the title and status (as text) of all tasks

SELECT task.title, status.name
FROM task JOIN status

-- Task 9 Get the name of each status, along with a count of how many tasks have that status

SELECT status.name, COUNT(task.id) 
FROM status JOIN task ON status.id = task.status_id
GROUP BY status.name

-- Task 10 Get the names of all statuses, sorted by the status with most tasks first

SELECT status.name,  COUNT(task.id) 
FROM status JOIN task ON status.id = task.status_id
GROUP BY status.name
ORDER BY COUNT(task.id) DESC