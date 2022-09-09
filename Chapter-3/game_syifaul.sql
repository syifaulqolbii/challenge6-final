DROP TABLE IF EXISTS user_game, user_game_biodata, user_game_history CASCADE;

CREATE TABLE "user_game" (
  "id" integer,
  "username" varchar(50),
  "password" varchar(50),
  PRIMARY KEY ("id")
);

CREATE TABLE "user_game_biodata" (
  "id" integer,
  "nama" varchar(50),
  "email" varchar(50),
  "id_user_game" integer,
  PRIMARY KEY ("id")
);

CREATE TABLE "user_game_history" (
  "id" integer,
  "lama_bermain" integer,
  "ranking" varchar(50),
  "id_user_game" integer,
  PRIMARY KEY ("id")
);


-- INSERT DATA --
INSERT INTO user_game(id, username, password) VALUES 
(1, 'syifa', 'syifa'),
(2, 'syifaul', 'syifaul'),
(3, 'qolbi', 'qolbi'),
(4, 'auliya', 'auliya');

-- HASIL PERCOBAAN --
-- game=# INSERT INTO user_game(id, username, password) VALUES 
-- game=# SELECT * FROM user_game;
--  id | username | password
-- ----+----------+----------
--   1 | syifa    | syifa
--   2 | syifaul  | syifaul
--   3 | qolbi    | qolbi
--   4 | auliya   | auliya
-- (4 rows)

INSERT INTO user_game_biodata VALUES 
(1, 'syifa', 'syifa@gmail.com', 1),
(2, 'syifaul', 'syifaul@gmail.com', 2),
(3, 'qolbi', 'qolbi@gmail.com', 3),
(4, 'auliya', 'auliya@gmail.com', 4);

INSERT INTO user_game_history VALUES 
(1, 2, 'mythic', 1),
(2, 4, 'mythic', 2),
(3, 1, 'legend', 3),
(4, 5, 'epic', 4);


-- UPDATE DATA --
UPDATE user_game
SET username = 'syifasyifa' 
WHERE id = 1;

-- HASIL PERCOBAAN --
-- game=# UPDATE user_game
-- game-# SET username = 'syifasyifa'
-- game-# WHERE id = 1;
-- UPDATE 1
-- game=# select * from user_game;
--  id |  username  | password
-- ----+------------+----------
--   2 | syifaul    | syifaul
--   3 | qolbi      | qolbi
--   4 | auliya     | auliya
--   1 | syifasyifa | syifa
-- (4 rows)


-- DELETE DATA --

DELETE FROM user_game WHERE id = 1;

-- HASIL PERCOBAAN --
-- game=# DELETE FROM user_game WHERE id = 1;
-- DELETE 1
-- game=# select * from user_game;
--  id | username | password
-- ----+----------+----------
--   2 | syifaul  | syifaul
--   3 | qolbi    | qolbi
--   4 | auliya   | auliya
-- (3 rows)


-- READ DATA --
SELECT * FROM user_game;

-- HASIL PERCOBAAN --
-- game=# SELECT * FROM user_game
-- game-# ;
--  id | username | password
-- ----+----------+----------
--   2 | syifaul  | syifaul
--   3 | qolbi    | qolbi
--   4 | auliya   | auliya
-- (3 rows)


