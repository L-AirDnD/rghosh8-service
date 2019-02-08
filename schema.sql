DROP DATABASE IF EXISTS ads;

CREATE DATABASE ads;

USE ads;

CREATE TABLE similar_listing (
  similarListingID INTEGER AUTO_INCREMENT PRIMARY KEY,
  photoID INTEGER,
  listingtype CHAR(100),
  caption CHAR(200),
  price INTEGER,
  rating INTEGER,
  offeringID INTEGER
);

CREATE TABLE things_to_do (
  thingsToDoID INTEGER AUTO_INCREMENT PRIMARY KEY,
  photoID INTEGER,
  eventtype CHAR(100),
  caption CHAR(200),
  price INTEGER,
  rating INTEGER,
  offeringID INTEGER
);

CREATE TABLE offering (
  offeringID INTEGER AUTO_INCREMENT PRIMARY KEY,
  caption CHAR(200)
);


ALTER TABLE similar_listing ADD FOREIGN KEY (offeringID) REFERENCES offering (offeringID);
ALTER TABLE things_to_do ADD FOREIGN KEY (offeringID) REFERENCES offering (offeringID); 






