CREATE DATABASE  homework3
    DEFAULT CHARACTER SET = 'utf8mb4';
use homework3;
SET NAMES utf8mb4;

CREATE TABLE `Meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar(255) NULL,
  `when` DATETIME NULL DEFAULT NULL,
  `max_reservations` int,
  `price`decimal,
  `created_date` date
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
CREATE TABLE `Reservation`(
 `id` int (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int,
 `meal_id` int(10) unsigned,
 `created_date` date,
 `contact_phonenumber` varchar(255) NOT NULL,
 `contact_name` varchar(255) NOT NULL,
 `contact_email` varchar(255) NOT NULL,
 CONSTRAINT `fk_Meal_Reservation` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `meal_id` int(10) unsigned,
  `stars` int,
  `created_date` date,
  CONSTRAINT `fk_Meal_Review` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
