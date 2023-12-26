SELECT * FROM task;

INSERT INTO task(title, description, created, updated, due_date, status_id)
VALUES ("Design something daily", "like daily challenges", "2018-12-18 13:17:17", "2019-12-18 03:40:20", "2018-12-28 13:17:17",3);

UPDATE task
SET title = "Do random things"
WHERE id= 40; 

UPDATE task
SET due_date = "2018-12-31 23:59:00"
WHERE id= 40; 

UPDATE task
SET status_id = "3"
WHERE id= 40; 

DELETE FROM task
WHERE id= 35; 
