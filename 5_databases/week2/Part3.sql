--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';


--Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT task.title , user.name , task.status_id
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
WHERE user.name = 'Donald Duck' AND task.status_id = 1;

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT task.title, user.name, task.created
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 9;


--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTH(created), COUNT(*)
FROM task
GROUP BY MONTH(created);