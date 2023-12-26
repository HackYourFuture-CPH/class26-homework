create DATABASE LibraryDatabase;
USE LibraryDatabase;

CREATE Table Members(
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
      `name` varchar(255) NOT NULL,
       PRIMARY KEY (`id`)
);

CREATE Table Books(
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
     `BookName` varchar(255) NOT NULL,
     `author` varchar(255) NOT NULL,
     `Pages` varchar(255) NOT NULL,
     `Members_id` int(10) unsigned NOT NULL,
      PRIMARY KEY (`id`),
      CONSTRAINT `fk_Members` FOREIGN KEY (`Members_id`) REFERENCES `Members` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE Table Genres(
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
     `Collection` varchar(255) NOT NULL,
     `Description` varchar(255) NOT NULL,
     `Books_id` int(10) unsigned NOT NULL,
     PRIMARY KEY (`id`),
     CONSTRAINT `fk_Books` FOREIGN KEY (`Books_id`) REFERENCES `Books` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE Table Racks(
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
     `Floor Number` INT NOT NULL,
     `Aisle Number` varchar(255) NOT NULL,
     `Shelf Number` INT NOT NULL,
     `Genres_id` int(10) unsigned NOT NULL,
     PRIMARY KEY (`id`),
      CONSTRAINT `fk_Genres` FOREIGN KEY (`Genres_id`) REFERENCES `Genres` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE Table BorrowingLogs(
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
     `DueDate` DATETIME NOT NULL,
     `OverdueDate` VARCHAR(255) NOT NULL,
     PRIMARY KEY (`id`)
);


CREATE Table Racks_Logs(
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
      `Racks_id` int(10) unsigned NOT NULL,
      `Borrowinglogs_id` int(10) unsigned NOT NULL,
      PRIMARY KEY (`id`),
      CONSTRAINT `fk_Racks` FOREIGN KEY (`Racks_id`) REFERENCES `Genres` (`id`) ON DELETE CASCADE,
      CONSTRAINT `fk_Borrowinglogs` FOREIGN KEY (`Borrowinglogs_id`) REFERENCES `Borrowinglogs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO members (id,name)
VALUES (1,'Emily Johnson');

INSERT INTO members (id,name)
VALUES (2,'Alex Rodriguez');

INSERT INTO members (id,name)
VALUES (3,'Sophia Chen');

INSERT INTO members (id,name)
VALUES (4, 'Olivia Davis');

INSERT INTO members (id,name)
VALUES (5,'Daniel Williams');



INSERT INTO books (id,BookName, author, `Pages`, Members_id)
VALUES (1,'The Great Gatsby', 'F. Scott Fitzgerald', 100,3);

INSERT INTO books (id,BookName, author, Pages, Members_id)
VALUES (2,'To Kill a Mockingbird', 'Harper Lee', 220, 4);

INSERT INTO books (id,BookName, author, Pages, Members_id)
VALUES (3,'1984', 'George Orwell', 550, 2);

INSERT INTO books (id,BookName, author, Pages, Members_id)
VALUES (4,'The Catcher in the Ry', 'J.D. Salinger', 200, 1);

INSERT INTO books (id, BookName, author, Pages, Members_id)
VALUES (5,'Pride and Prejudice', 'Jane Austen', 700,5);



INSERT INTO genres (id, collection, description, Books_id)
VALUES (1,'Mystery Collection', 'Enthralling tales of suspense, crime, and clever detective work.',3);

INSERT INTO genres (id, collection, description, Books_id)
VALUES (2,'Sci-Fi Chronicles', 'Futuristic adventures, scientific marvels, and imaginative explorations.',4);

INSERT INTO genres (id, collection, description, Books_id)
VALUES (3,'Historical Epics', 'Gripping narratives set against historical backdrops, bringing the past to life.',3);

INSERT INTO genres (id, collection, description, Books_id)
VALUES (4,'Fantasy Realms', 'Magical worlds, mythical creatures, and epic quests of imagination.',1);

INSERT INTO genres (id, collection, description, Books_id)
VALUES (5,'Romantic Escapes', 'Heartwarming love stories, passionate encounters, and emotional journeys.',1);



INSERT INTO racks (id, `Floor Number`, `Aisle Number`, `Shelf Number`,Genres_id)
VALUES (1, 3, 'B', 3,2);

INSERT INTO racks (id, `Floor Number`, `Aisle Number`, `Shelf Number`,Genres_id)
VALUES (2, 4, 'D', 4,3);

INSERT INTO racks (id, `Floor Number`, `Aisle Number`, `Shelf Number`,Genres_id)
VALUES (3, 3, 'B', 2,5);

INSERT INTO racks (id, `Floor Number`, `Aisle Number`, `Shelf Number`,Genres_id)
VALUES (4, 2, 'E', 1,1);

INSERT INTO racks (id, `Floor Number`, `Aisle Number`, `Shelf Number`,Genres_id)
VALUES (5, 2, 'G', 3,2);



INSERT INTO borrowinglogs (id, `DueDate`,`OverdueDate`)
VALUES (1, '2023-02-05', 'Yes');

INSERT INTO borrowinglogs (id, `DueDate`,`OverdueDate`)
VALUES (2, '2023-03-03', 'No');

INSERT INTO borrowinglogs (id, `DueDate`,`OverdueDate`)
VALUES (3, ' 2023-03-25', 'Yes');

INSERT INTO borrowinglogs (id, `DueDate`,`OverdueDate`)
VALUES (4, ' 2023-05-03', 'Yes');

INSERT INTO borrowinglogs (id, `DueDate`,`OverdueDate`)
VALUES (5, '2023-06-08', 'No');





INSERT INTO racks_logs (id, `Racks_id`,`Borrowinglogs_id`)
VALUES (1, 2, 3);

INSERT INTO racks_logs (id, `Racks_id`,`Borrowinglogs_id`)
VALUES (2, 2, 4);

INSERT INTO racks_logs (id, `Racks_id`,`Borrowinglogs_id`)
VALUES (3, 5, 4);

INSERT INTO racks_logs (id, `Racks_id`,`Borrowinglogs_id`)
VALUES (4, 3, 4);

INSERT INTO racks_logs (id, `Racks_id`,`Borrowinglogs_id`)
VALUES (5, 1, 2);