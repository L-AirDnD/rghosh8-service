DROP DATABASE IF EXISTS ads;

CREATE DATABASE ads;

USE ads;

CREATE TABLE similar_listing (
  objectID INTEGER AUTO_INCREMENT PRIMARY KEY,
  photoID INTEGER,
  listingtype CHAR(100),
  caption CHAR(200),
  price INTEGER,
  rating INTEGER
);

CREATE TABLE things_to_do (
  objectID INTEGER AUTO_INCREMENT PRIMARY KEY,
  photoID INTEGER,
  eventtype CHAR(100),
  caption CHAR(200),
  price INTEGER,
  rating INTEGER
);

		
CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  roomname CHAR(50)
);


ALTER TABLE listing ADD FOREIGN KEY (offering) REFERENCES offering (id);
ALTER TABLE event ADD FOREIGN KEY (room) REFERENCES rooms (id);