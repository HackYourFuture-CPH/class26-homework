-- Active: 1699540080106@@0.0.0.0@3306
CREATE DATABASE mealsharing;
Use mealsharing;

CREATE TABLE `reservation` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` INT NOT NULL,
`meal_id` int(10) UNSIGNED,
`created_date` DATE NOT NULL,
`contact_phonenumber` VARCHAR(255) NOT NULL,
`contact_name` VARCHAR(255) NOT NULL,
`contact_email` VARCHAR(255) NULL,
CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `meal` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(255) NOT NULL,
`description` TEXT,
`location` VARCHAR(255) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` int NOT NULL,
`price` DECIMAL NOT NULL,
`created_date` DATE NOT NULL)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(255) NOT NULL,
`description` TEXT,
`meal_id` int(10) UNSIGNED,
`stars` int NOT NULL,
`created_date` DATE,
CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--reservation

INSERT INTO reservation ( id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email )
VALUES(1, "2", "2", "2023-11-23 18:21:00", "+45 12345678", "Leon", "leon@gmail.com" );

INSERT INTO reservation ( id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email )
VALUES(2, "4", "1", "2023-11-25 18:24:00", "+45 98765432", "Tim", "tim@gmail.com" );

INSERT INTO reservation ( id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email )
VALUES(4, "2", "3", "2023-11-27 18:24:00", "+45 98765632", "Karan", "karan@gmail.com" );

INSERT INTO reservation ( id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email )
VALUES(5, "2", "5", "2023-11-27 18:24:00", "+45 985839532", "Mohit", "mohit@gmail.com" );

--meal

INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, reated_date)
VALUES(1, "Veg Dum biryani", "Rice with some spices and vegetables", "India spice", "2023-11-11 19:21:00", 5, "250", "2023-05-11");

INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, reated_date)
VALUES(2, "Butter paneer", "paneer curry alog with rice", "Indian lounge", "2023-05-21 11:21:00", 8, "500", "2023-07-11 18:21:00");

INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, reated_date)
VALUES(5, "Raita", "Yogurt with spices", "Indian lounge", "2023-05-21 11:21:00", 8, "40", "2023-07-11 18:21:00");

INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, reated_date)
VALUES(4, "Papadam", "Crunchy like chips", "Indian Royal", "2023-05-21 11:21:00", 8, "20", "2023-07-11 18:21:00");


--review

INSERT INTO review (id, title, description, meal_id, stars, created_date )
VALUES(1, "Bestever Veg Dum biryani", "the combination of Rice with some spices and vegetables was awesome", "1", 4, "2023-08-11 10:21:00");

INSERT INTO review (id, title, description, meal_id, stars, created_date )
VALUES(2, "Bestever butter paneer", "the combination of Rice with paneer curry was awesome", "2", 4, "2023-06-22 10:21:00");

INSERT INTO review (id, title, description, meal_id, stars, created_date )
VALUES(4, "Best papadam", "the crunchiness was awesome", "4", 4, "2023-06-22 10:21:00");

INSERT INTO review (id, title, description, meal_id, stars, created_date )
VALUES(5, "Bestever boondi raita", "so delicious", "5", 4, "2023-05-22 10:21:00");

