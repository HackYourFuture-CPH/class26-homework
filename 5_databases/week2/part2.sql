--Create a new database containing the following tables: 

CREATE DATABASE HW_week2_part2 
DEFAULT CHARACTER SET = 'utf8mb4';

USE HW_week2_part2;

--Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE
    `Class` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `begins` DATE,
        `ends` DATE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE
    `Student` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `email` VARCHAR(255),
        `phone` VARCHAR(35),
        `class_id` INT,
        FOREIGN KEY (class_id) REFERENCES Class(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--Create an index on the name column of the student table

CREATE INDEX idx_student_name ON Student (`name`);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations)

ALTER TABLE Class
ADD
    COLUMN status ENUM(
        'Not started',
        'In progress',
        'Done'
    ) DEFAULT 'Not started';
