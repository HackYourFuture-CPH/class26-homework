-- Active: 1699540080106@@0.0.0.0@3306@hyf_lesson1

SELECT COUNT(*)
FROM task;

SELECT COUNT(*)
FROM task
WHERE due_date IS NULL;

select task.title
FROM task
WHERE status_id = 3;

SELECT task.title
FROM task
WHERE status_id != 3;

SELECT *
FROM task
ORDER BY created DESC;

SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

SELECT task.title, task.due_date
FROM task
WHERE title LIKE "%database%";

SELECT task.title, status.name
FROM task JOIN status;

SELECT status.name , COUNT(task.id)
FROM status JOIN task ON status.id = task.status_id
GROUP BY status.name;

SELECT status.name , COUNT(task.id)
FROM status JOIN task ON status.id = task.status_id
GROUP BY status.name
ORDER BY COUNT(task.id) DESC;


