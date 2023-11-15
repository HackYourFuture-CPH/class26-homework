--Q1
SELECT COUNT(*) 
FROM task;

--Q2
SELECT COUNT(*) 
FROM task 
WHERE due_date IS NULL;

--Q3
SELECT COUNT(*) 
FROM task 
WHERE status_id = 3;

--Q4
SELECT COUNT(*) 
FROM task 
WHERE status_id != 3;
--Q5
SELECT * 
FROM task  
ORDER BY created DESC; 

--Q6
SELECT *
FROM task 
ORDER BY created DESC
LIMIT 1;

--Q7
SELECT title, due_date 
FROM task 
WHERE title LIKE "%database%" 
OR description  LIKE "%database%";

--Q8
SELECT task.title,status.name 
FROM task 
JOIN status 
ON task.status_id = status.id;

--Q9
SELECT status.name, COUNT(task.id) FROM status
JOIN task ON status.id = task.status_id
GROUP BY status.name ;

--Q10
SELECT status.name, COUNT(task.id) AS status_count
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.name 
ORDER BY status_count DESC;

