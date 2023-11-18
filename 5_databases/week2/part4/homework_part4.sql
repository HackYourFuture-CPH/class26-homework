-- Active: 1698992883180@@127.0.0.1@3306@homework_part4
CREATE TABLE Students (
    student_id INT ,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    PRIMARY KEY (student_id)
);

CREATE TABLE Courses (
    course_id INT,
    title VARCHAR(255),
    description VARCHAR(255),
    credits VARCHAR(255),
    PRIMARY KEY (course_id)
);

CREATE TABLE Teachers(
    teacher_id INT,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    PRIMARY KEY (teacher_id)
);

CREATE TABLE Enrollment(
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id,course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE Teaching (
    teacher_id INT,
    course_id INT,
    PRIMARY KEY (teacher_id,course_id),
    FOREIGN KEY (teacher_id) REFERENCES Teachers(teacher_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);




