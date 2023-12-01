SET NAMES utf8mb4;

CREATE TABLE `emplyee` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `status_id` int(10) unsigned NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `job` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `started_at` DATETIME NOT NULL,
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `job_emplyee` (
  `job_id` int(10) unsigned NOT NULL,
  `emplyee_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`user_id`, `task_id`),
  CONSTRAINT `fk_user_task_user` FOREIGN KEY (`job_id`) REFERENCES `job` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_task_task` FOREIGN KEY (`emplyee_id`) REFERENCES `emplyee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- Users
insert into user (id, name, status_id) values (1, 'Aarika Ellingworth', 1);
insert into user (id, name, status_id) values (2, 'Pren Goldsworthy', 2);


-- Statuses
insert into status (id, name) values (1, 'Senior');
insert into status (id, name) values (2, 'Junior');


-- Tasks
insert into job ON (id, name, started_at) values (1, 'Web Developer', '2017-10-25 06:54:16');
insert into job (id, name, started_at) values (2, 'iOS Developer','2017-09-26 03:06:46');

insert into user_task (emplyee_id, job_id) values(1, 2);
insert into user_task (emplyee_id, job_id) values(2, 1);