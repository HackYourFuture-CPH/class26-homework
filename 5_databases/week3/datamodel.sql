CREATE DATABASE meal_sharing;
USE  meal_sharing;


CREATE Table `Meal`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` TEXT,
  `location` varchar(255) NULL,
  `when` DATETIME NULL,
  `max_reservations` INT NOT NULL,
  `price` DECIMAL NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE Table `Reservation`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `number_of_guests` INT NOT NULL,
  `created_date` DATE NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NULL,
  `meal_id` int(10) unsigned,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE Table `Review`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title`  varchar(255) NOT NULL,
  `description` TEXT NULL,
  `stars` INT NOT NULL,
  `created_date` DATE NOT NULL,
  `meal_id` int(10) unsigned NOT NULL ,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- meal
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES(1, 'Homemade Italian Pasta Night', 'Join me for a cozy evening filled with the aroma of freshly made pasta and authentic Italian flavors.', 'My Home Kitchen, Downtown', '2023-11-18 19:00:00', '6', '25.00', '2023-11-05');

INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES(2, 'Spicy Thai Curry Delight', 'Spice up your day with a delicious homemade Thai curry, prepared with love and the finest ingredients.', 'Thai Spice Haven, Sunset Boulevard', '2023-12-03 18:30:00', '2', '30.00', '2023-10-12');

INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES(3, 'Classic French Cuisine Experience', 'Experience the elegance of French cuisine with a carefully curated menu of classic dishes.', 'La Petite Brasserie, Riverside', '2024-03-10 19:30:00', '12', '35.00', '2023-03-02');


-- reservations
INSERT INTO reservation (id,number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
VALUES(1, '3', '2023-11-10 08:30:00', '+1 (555) 123-4567', 'Alice Johnson', 'alice@ymail.com', '3');

INSERT INTO reservation (id,number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
VALUES(2, '4', '2023-12-05 18:15:00', '+44 20 7123 4567', 'John Smith', 'john@gmail.com', '1');

INSERT INTO reservation (id,number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
VALUES(3, '2', '2024-01-20 12:45:00', '+81 3-1234-5678', 'Emily Chen', 'emily@ymail.com', '4');


-- review
INSERT INTO review (id,title, description, stars, created_date, meal_id)
VALUES(1, 'Delicious Homemade Pasta!', 'The homemade pasta was a delight! Perfectly cooked and seasoned.', '5', '2023-11-20 12:30:00', '3');

INSERT INTO review (id,title, description, stars, created_date, meal_id)
VALUES(2, 'Spicy Thai Curry Explosion', 'The Thai curry had just the right amount of spice. Loved it!', '3', '2023-12-10 20:15:00', '4');

INSERT INTO review (id,title, description, stars, created_date, meal_id)
VALUES(3, 'Sushi Masterpiece', 'Incredible variety of sushi rolls, each one a work of art', '5', '2024-01-25 14:45:00', '1');


