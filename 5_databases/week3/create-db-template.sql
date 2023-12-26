-- Active: 1698992883180@@127.0.0.1@3306

CREATE DATABASE week3_homework DEFAULT CHARACTER SET = 'utf8mb4';

USE week3_homework;

CREATE TABLE
    Reservation(
        id INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
        number_of_guests INT(11) NOT NULL,
        meal_id INT(11) UNSIGNED NOT NULL,
        created_date DATETIME NOT NULL,
        contact_phonenumber VARCHAR(100) NOT NULL,
        contact_name VARCHAR(100) NOT NULL,
        contact_email VARCHAR(100) NOT NULL,
        CONSTRAINT fk_meal_id FOREIGN KEY(meal_id) REFERENCES meal(id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    meal(
        id INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        description TEXT DEFAULT NULL,
        location VARCHAR(100) NOT NULL,
        meal_when DATETIME NOT NULL,
        max_reservations INT(11) UNSIGNED NOT NULL,
        price DECIMAL,
        created_date DATETIME NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

    CREATE TABLE Review(
        id INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        description TEXT DEFAULT NULL,
        meal_id INT(11) UNSIGNED NOT NULL,
        stars INT(11) UNSIGNED NOT NULL,
        created_date DATETIME NOT NULL,
        CONSTRAINT fk_review_meal FOREIGN KEY(meal_id) REFERENCES meal(id) ON DELETE CASCADE ON UPDATE CASCADE)
        ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


        --Reservation
        INSERT INTO Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
        VALUES
        (1,2,1,'2024-11-03 14:00:00','123 456 789','McGonagall','mcgonagall@example.com'),
        (2,3,2,'2024-01-11 13:00:00','121 456 789','Dobby','dobby@example.com'),
        (3,4,3,'2024-02-04 09:00:00','122 456 789','Harry Potter','harrypotter@example.com'),
        (4,5,4,'2024-11-25 12:00:00','123 416 789','Hermione Granger','hermionegranger@example.com'),
        (5,6,5,'2024-12-11 11:00:00','123 456 781','Ron Weasly','ronweasly@example.com');

        --meal
        INSERT INTO meal (title, description, location, meal_when, max_reservations, price, created_date)
        VALUES
        ('Shepherds Pie','A delicious lunch','London','2024-03-03 14:00:00',2,10.00,'2023-11-03 14:00:00'),
        ('Rock Cakes',' Hard fruit-filled cakes that Hagrid often bakes','Copenhagen','2024-03-11 13:00:00',3,11.00,'2023-01-11 13:00:00'),
        ('Dragon Steak','A rare and flavorful steak from a dragon.','London','2024-03-04 09:00:00',4,12.00,'2023-02-04 09:00:00'),
        ('Roast Chicken with Herbs','A comforting dish often seen on Hogwarts tables.','Copenhagen','2024-03-25 12:00:00',5,13.00,'2023-11-25 12:00:00'),
        ('Mince Pies','Sweet pies filled with spiced fruit mincemeat','Sweden','2024-03-11 11:00:00',6,14.00,'2023-12-11 11:00:00');

        --review
        INSERT INTO Review (id, title, description, meal_id, stars, created_date)
        VALUES
        (1,'Good','The food was delicious',1,5,'2023-11-03 14:00:00'),
        (2,'Great','The food was great',5,4,'2023-01-11 13:00:00'),
        (3,'Amazing','The food was amazing',2,4,'2023-02-04 09:00:00'),
        (4,'Awesome','The food was awesome',3,3,'2023-11-25 12:00:00'),
        (5,'Bad','The food was bad',4,1,'2023-12-11 11:00:00');
