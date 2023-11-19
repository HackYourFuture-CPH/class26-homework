-- Active: 1699628373418@@127.0.0.1@3306@project
CREATE TABLE Playstations (
    playstation_id INT PRIMARY KEY,
    model_name VARCHAR(255) NOT NULL,
    purchase_date DATE
);

CREATE TABLE Players (
    player_id INT PRIMARY KEY,
    playstation_id INT,
    username VARCHAR(50) NOT NULL,
    join_date DATE,
    FOREIGN KEY (playstation_id) REFERENCES Playstations(playstation_id)
);

CREATE TABLE Games (
    game_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date DATE
);

CREATE TABLE PlayerGames (
    player_id INT,
    game_id INT,
    PRIMARY KEY (player_id, game_id),
    FOREIGN KEY (player_id) REFERENCES Players(player_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);

-- Inserting data into Playstations
INSERT INTO Playstations (model_name) VALUES ('PS4');
INSERT INTO Playstations (model_name) VALUES ('PS4 Pro');
INSERT INTO Playstations (model_name) VALUES ('PS5 Slim');
INSERT INTO Playstations (model_name) VALUES ('PS5');

-- Inserting data into Players
INSERT INTO Players (playstation_id, username) VALUES (1, 'John Doe');
INSERT INTO Players (playstation_id, username) VALUES (2, 'Jane Smith');
INSERT INTO Players (playstation_id, username) VALUES (1, 'Mike Johnson');
INSERT INTO Players (playstation_id, username) VALUES (2, 'Emily Davis');

-- Inserting data into Games
INSERT INTO Games (title, release_date) VALUES ('The Last of Us', '2013-06-14');
INSERT INTO Games (title, release_date) VALUES ('God of War', '2018-04-20');
INSERT INTO Games (title, release_date) VALUES ('Spider-Man: Miles Morales', '2020-11-12');
INSERT INTO Games (title, release_date) VALUES ('Horizon Zero Dawn', '2017-02-28');

-- Inserting data into PlayerGames
INSERT INTO PlayerGames (player_id, game_id) VALUES (1, 1);
INSERT INTO PlayerGames (player_id, game_id) VALUES (1, 2);
INSERT INTO PlayerGames (player_id, game_id) VALUES (2, 1);
INSERT INTO PlayerGames (player_id, game_id) VALUES (1, 3);
INSERT INTO PlayerGames (player_id, game_id) VALUES (2, 3);
INSERT INTO PlayerGames (player_id, game_id) VALUES (1, 4);
