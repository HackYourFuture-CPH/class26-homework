CREATE DATABASE mealsharing;

Use mealsharing;

CREATE TABLE
    `reservation` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `number_of_guests` INT NOT NULL,
        `meal_id` int(10) UNSIGNED,
        `created_date` DATE NOT NULL,
        `contact_phonenumber` VARCHAR(255) NOT NULL,
        `contact_name` VARCHAR(255) NOT NULL,
        `contact_email` VARCHAR(255) NULL,
        CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    `meal` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `title` VARCHAR(255) NOT NULL,
        `description` TEXT,
        `location` VARCHAR(255) NOT NULL,
        `when` DATETIME NOT NULL,
        `max_reservations` int NOT NULL,
        `price` DECIMAL NOT NULL,
        `created_date` DATE NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    `review` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `title` VARCHAR(255) NOT NULL,
        `description` TEXT,
        `meal_id` int(10) UNSIGNED,
        `stars` int NOT NULL,
        `created_date` DATE,
        CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Meals

INSERT INTO
    meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Chicken curry',
        'tender and yummy',
        'Copenhagen',
        '2024-10-25 06:54:16',
        4,
        200,
        '2023-09-10 11:05:05'
    ), (
        'Lamb curry',
        'Cooked with love',
        'London',
        '2024-01-21 06:54:16',
        9,
        150,
        '2023-10-15 15:05:09'
    ), (
        'Roast lamb',
        'Roasted with even more love',
        'Paris',
        '2024-01-15 19:23:09',
        6,
        800,
        '2022-12-10 02:02:01'
    ), (
        'Smoked salmon',
        'Imported from Norway',
        'Copenhagen',
        '2024-08-10 06:54:16',
        10,
        300,
        '2023-02-11 23:10:03'
    ), (
        'Enchilada',
        'You probably wouldn''t like that',
        'Copenhagen',
        '2024-04-03 05:34:11',
        6,
        900,
        '2022-10-15 10:09:09'
    );

-- Reservations

INSERT INTO
    reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        4,
        1,
        '2023-06-14 15:05:09',
        20901990,
        'Alpha',
        'alpha@yahoo.com'
    ), (
        8,
        1,
        '2023-07-17 15:05:09',
        30201890,
        'Bravo',
        'bravo@yahoo.com'
    ), (
        6,
        3,
        '2023-08-18 15:05:09',
        20102980,
        'Charlie',
        'charlie@yahoo.com'
    ), (
        3,
        5,
        '2023-09-19 15:05:09',
        10111234,
        'Delta',
        'delta@yahoo.com'
    ), (
        5,
        2,
        '2023-10-20 15:05:09',
        23241865,
        'Echo',
        'echo@yahoo.com'
    );

-- Reviews

INSERT INTO
    review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'I like it',
        'Title says it all.',
        1,
        1,
        '2022-10-01 06:10:16'
    ), (
        'This is to be loved',
        'you will love it',
        3,
        5,
        '2023-08-16 02:16:40'
    ), (
        'Mouth watering',
        'We will order it again',
        2,
        4,
        '2017-10-04 18:07:37'
    ), (
        'Order online',
        'The fridge is almost empty',
        5,
        3,
        '2023-07-21 15:10:10'
    ), (
        'Empty box',
        NULL,
        2,
        0,
        '2023-01-01 18:10:06'
    );