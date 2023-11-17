USE hyf_lesson1;

--1. Add a task  with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Be good', 'Stop beating your husband', '2023-11-16 12:00:00', '2023-11-16 12:00:00', '2023-12-01 12:00:00', 1, 3);

--2. Change the title of a task
UPDATE task
set title = "Sleep"
where title = "Wash clothes";


SELECT *
from task;

--3. Change a task due date
UPDATE task
SET due_date = 2017-10-15 
WHERE title = 'Wash clothes';

--4. Change a task status
UPDATE status
SET name = 'Yet to begin'
WHERE name = 'Not started';

SELECT *
from status;

--5. Mark a task as complete
UPDATE task
SET status_id = 3
WHERE title = 'Wash clothes';

--6. Delete a task
DELETE FROM task
WHERE title = 'Wash clothes';

/* Create a new database containing the following tables:
Class: with the columns: id, name, begins (date), ends (date)
Student: with the columns: id, name, email, phone, class_id (foreign key) */


CREATE DATABASE dbweek2
    DEFAULT CHARACTER SET = 'utf8mb4';
    
    USE dbweek2;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,  
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NULL, BIGINT
  PRIMARY KEY (`id`),
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


/*Create an index on the name column of the student table.*/
CREATE INDEX idx_name student (name);

/*Add a new column to the class table named status which can only have the following 
values: not-started, ongoing, finished (hint: enumerations). */
ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;

