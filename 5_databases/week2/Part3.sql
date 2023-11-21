--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT *
FROM task JOIN `user` on email LIKE "%@spotify.com"

--Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT task.title, user.name, status_id
FROM task JOIN `user` on name = "Donald Duck"
Where status_id = 1

SELECT task.title, user.name, status_id
FROM task JOIN `user` 
Where status_id = 1 AND NAME = "Donald Duck"

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT task.title, user.name, created
FROM task JOIN `user` on name = "Maryrose Meadows"
WHERE month(created)= 09

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTH (created), COUNT(*)
FROM task
GROUP BY MONTH(created)