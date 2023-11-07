SELECT name,phone
FROM user
WHERE name="Pablo Kisbee";


SELECT title, description
FROM task,user
WHERE name LIKE "%new%" OR title LIKE "%new%";


SELECT user.id, user.name, task.title
FROM task, user
WHERE user.name = "Pablo Kisbee" AND task.user_id=user.id;


SELECT user.id, user.name, task.title
FROM task, user
WHERE user.name = "Aarika Ellingworth" AND task.user_id=user.id;


SELECT *
from user
order by user.name
limit 7;


SELECT COUNT(user_id)
from task;


SELECT MAX(created)
from task;


SELECT SUM(created)
from task;


SELECT MONTH(task.created),COUNT(task.id)
from task
GROUP BY MONTH(created);