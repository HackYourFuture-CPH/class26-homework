CREATE DATABASE IF NOT EXISTS SchoolDatabase;

USE SchoolDatabase;

CREATE TABLE IF NOT EXISTS `Class` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `begins` DATE NOT NULL,
    `ends` DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS `Student` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `class_id` INT,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);

CREATE INDEX idx_name ON Student (name);

ALTER TABLE Class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';

