SELECT COUNT(*) FROM task;
SELECT COUNT(*) FROM task WHERE due_date IS NULL;
SELECT COUNT(*) FROM task WHERE status_id = 3;

SELECT COUNT(*) FROM task WHERE status_id = 2 OR status_id = 1 ;
SELECT * FROM task  ORDER BY created DESC; 
SELECT *
FROM task ORDER BY created DESC
LIMIT 1;
SELECT title, due_date FROM task WHERE title LIKE "%database%" OR description  LIKE "%database%"  ;
SELECT  task.title,status.name FROM task JOIN status ;
SELECT status.name, COUNT(task.id) FROM status
 JOIN task ON  status_id = task.status_id
GROUP BY status.name ;

SELECT status.name, COUNT(*) AS status_count
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.name 
ORDER BY status_count DESC;
