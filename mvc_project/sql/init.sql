ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

create schema if not exists `zadanie_domowe`;

CREATE TABLE `zadanie_domowe`.`tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `deadline` datetime NOT NULL,
  `is_finished` tinyint NOT NULL DEFAULT '0',
  `is_expired` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;