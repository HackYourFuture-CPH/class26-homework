-- Active: 1699216915341@@0.0.0.0@3306@hyf_lesson1

SELECT COUNT(*)
 FROM task;




SELECT COUNT(*) 
FROM task 
WHERE due_date <= CURDATE();



SELECT *
FROM task
WHERE status_id= 3;


SELECT *
FROM task
WHERE status_id!= 3;



SELECT *
FROM task
ORDER BY created DESC;


SELECT MAX(created)
from task;

SELECT title, due_date
FROM task;


SELECT task.title, status.name
FROM task, status




SELECT status.name AS status_name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.name;



SELECT status.name AS status_name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.name
ORDER BY task_count DESC;
