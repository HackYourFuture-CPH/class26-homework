--1. Add a task  with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Be good', 'Stop beating your husband', 'created', 'updated', 'due_date', 'status_id', 'user_id');

--2. Change the title of a task
UPDATE task
set title = "Sleep"
where title = "Wash clothes";


SELECT *
from task;

--3. Change a task due date
UPDATE task
SET due_date = 2017-10-15 13:05:09
WHERE title = 'Wash clothes';

--4. Change a task status
UPDATE status
SET name = 'Yet to begin'
WHERE name = 'Not started';

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

CREATE DATABASE Shah
    DEFAULT CHARACTER SET = 'utf8mb4' SET DATEFORMAT "YYYY-MM-DD HH:MM:SS";
    
    USE Shah;

CREATE TABLE `Student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NULL,
  PRIMARY KEY (`id`),
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `status` (`id`) ON DELETE CASCADE,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `status_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




/*If you are done with the above tasks, you can continue with these advanced tasks:
Create an index on the name column of the student table.
Add a new column to the class table named status which can only have the following 
values: not-started, ongoing, finished (hint: enumerations). */
