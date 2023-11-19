-- Active: 1699628373418@@127.0.0.1@3306@hyf_lesson1

-- Part 1: Working with tasks
SELECT *
FROM task


INSERT INTO task (id, title, description, created, updated, due_date, status_id, user_id)
VALUES (36, 'premier league', 'english football', '1992-02-20 12:22:12', '2023-11-16 12:22:12', '23-10-15 12:22:12', 2, '6'
)

--- Change the title of a task
UPDATE task
SET title = 'clean clothes'
WHERE title = 'Wash clothes';



-- Change a task due date
UPDATE task
SET due_date = '2023-11-01 09:15:22'
WHERE id = 2;


-- Change a task status-
UPDATE task
SET status_id = 3
WHERE id = 2;


-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 4;


-- Delete a task
DELETE FROM task
WHERE id = 2;


-- Part 2: School database

CREATE TABLE class ( 
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL, 
    begins DATE, 
    ends DATE,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE student ( 
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255), 
    phone VARCHAR(255), 
    class_id INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (class_id) REFERENCES class(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE INDEX  ind_name
ON student (name);


ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL;


