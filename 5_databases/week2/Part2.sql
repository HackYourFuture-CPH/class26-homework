
CREATE TABLE Class (
    id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    begins DATE,
    ends DATE,
    PRIMARY KEY (id)  
) ENGINE=innoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE Student (
    id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NULL,
    phone VARCHAR(20) NULL,
    class_id INT,
    PRIMARY KEY (id) 
) ENGINE=innoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE INDEX index_name ON Student (name);

ALTER TABLE Class
ADD COLUMN status 
ENUM('not-started', 'ongoing', 'finished');
