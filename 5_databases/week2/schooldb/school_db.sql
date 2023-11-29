-- Active: 1698992883180@@127.0.0.1@3306@school_db

--Classes: with the columns: id, name, begins (date), ends (date)

CREATE TABLE Class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    begins DATE,
    ends DATE
);

--Students: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE Student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(50),
    phone VARCHAR(15),
    class_id INT,
    Foreign Key (class_id) REFERENCES Class(id)
);

SELECT* FROM Class;

SELECT * FROM Student;

--Create an index on the name column of the student table.

CREATE INDEX idx_name ON Student(name);

--Add a new column to the class table named status which can only have 
--the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE Class
ADD status ENUM('not-started','ongoing','finished');

SELECT * FROM Class ;

