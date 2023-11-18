SELECT * FROM user;

SELECT user.name, user.email, task.title 
FROM user JOIN user_task on user.id = user_id
          JOIN task ON task.id= task_id
WHERE email LIKE '%@spotify.com%';



SELECT user.name, task.title, status.name 
FROM user JOIN user_task on user.id= user_id
          JOIN task ON task.id= task_id
          JOIN status ON status.id= status_id
WHERE user.name = "Donald Duck";



SELECT user.name, task.title, task.created
FROM user JOIN user_task ON user.id= user_id
          JOIN task on task.id= task_id
where user.name = "Maryrose Meadows"
AND MONTH(created) =9;



SELECT MONTHNAME(created) AS Months, COUNT(title) AS Number_of_tasks
FROM task
GROUP BY MONTHNAME(created);
