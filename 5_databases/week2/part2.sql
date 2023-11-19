-- create a class table  
 SET NAMES utf8mb4;

CREATE TABLE class (
  id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  begins  DATE ,
  ends  DATE 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Create the Student table
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- create index for student table 

CREATE INDEX idx_student_name 
ON student(name);
-- Add new COLUMN
ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;