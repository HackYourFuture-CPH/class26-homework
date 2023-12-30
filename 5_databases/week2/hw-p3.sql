use lesson2;

--Get all the tasks assigned to users whose email ends in @spotify.com

SELECT * FROM user WHERE email LIKE '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT
    task.title,
    user.name,
    status.name
FROM user
    JOIN user_task ON user.id = user_task.user_id
    JOIN task ON user_task.task_id = task.id
    JOIN status ON task.status_id = status.id
WHERE
    user.name = 'Donald Duck'
    AND status.name = 'Not started';

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT
    task.title,
    user.name,
    created
FROM user
    JOIN user_task ON user.id = user_task.user_id
    JOIN task ON user_task.task_id = task.id
WHERE
    user.name LIKE 'Maryrose Meadows'
    AND MONTH(task.created) = 9;

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT
    MONTH(created) AS month,
    COUNT(*) AS task_count
FROM task
GROUP BY MONTH(created);