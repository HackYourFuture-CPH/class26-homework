
CREATE DATABASE SchoolDatabase
USE SchoolDatabase;
SET NAMES utf8mb4;

CREATE TABLE Class (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `begins` DATE,
   `ends` DATE,
   PRIMARY KEY (`id`)
);


CREATE TABLE Student (
   `Studentid` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255),
   `phone` VARCHAR(255),
   `Class_id` INT NOT NULL,
   PRIMARY KEY(`Studentid`),
   CONSTRAINT `fk_Class` FOREIGN KEY (`Class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE
);

CREATE INDEX `idx_student_name`
ON Student (name);


ALTER TABLE Class 
   ADD COLUMN `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL; 

ALTER TABLE Class 
    MODIFY COLUMN `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL; 
