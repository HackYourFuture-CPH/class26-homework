--> Part 2: School database
CREATE DATABASE SchoolDatabase;

USE SchoolDatabase;

CREATE TABLE Class (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    begins DATE,
    ends DATE
);

CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(15),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);

-- Creating an Index
CREATE INDEX idx_student_name ON Student (name);

-- Adding a new column
ALTER TABLE Class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');