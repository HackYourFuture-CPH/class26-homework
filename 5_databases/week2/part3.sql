USE hyf_lesson2;
--1
SELECT task.*
FROM ((task JOIN user_task 
ON task.id = user_task.task_id)
JOIN `user` ON user_task.user_id = user.id)
WHERE user.email LIKE "%@spotify.com";

--2


SELECT task.*
FROM (((task JOIN user_task 
ON task.id = user_task.task_id)
JOIN `user` ON user_task.user_id = user.id)
JOIN status ON task.status_id = status.id)
WHERE status.name = "Not started";

--3

SELECT task.*
FROM ((task JOIN user_task 
ON task.id = user_task.task_id)
JOIN `user` ON user_task.user_id = user.id)
WHERE user.name = "Maryrose Meadows" 
AND month(task.created) = 9;

--4
SELECT MONTHNAME (created), COUNT(*)
FROM task
GROUP BY MONTHNAME(created)
