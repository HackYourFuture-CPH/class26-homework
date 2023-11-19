-- Active: 1699628373418@@127.0.0.1@3306@hyf_lesson2
SELECT *
FROM task

SELECT *
FROM `user`

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT *
FROM task JOIN `user`
WHERE `user`.email LIKE '%@spotify.com'


-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT *
from status

SELECT task.title, status_id, USER.name
FROM task JOIN `user`
WHERE status_id = 1 AND name = 'Donald Duck'


-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT *
FROM task JOIN `user`
WHERE name = 'Maryrose Meadows' AND month(created) = 9


-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT month(created), count(*)
FROM task
GROUP BY month(created)


