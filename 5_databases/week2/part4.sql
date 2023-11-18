--> Part 4: Creating a database of drivig school
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(255),
    phone_number VARCHAR(15)
);

CREATE TABLE Instructors (
    instructor_id INT PRIMARY KEY,
    name VARCHAR(255),
    car_model VARCHAR(255)
);

CREATE TABLE Lessons (
    lesson_id INT PRIMARY KEY,
    student_id INT,
    instructor_id INT,
    lesson_date DATE,
    status VARCHAR(20),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);