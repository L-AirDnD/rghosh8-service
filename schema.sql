DROP DATABASE IF EXISTS ads;

CREATE DATABASE ads;

USE ads;

CREATE TABLE similar_listing (
  similarListingID INTEGER AUTO_INCREMENT PRIMARY KEY,
  photoID VARCHAR(200),
  listingtype VARCHAR(100),
  caption VARCHAR(200),
  price VARCHAR(25),
  rating INTEGER
);

CREATE TABLE things_to_do (
  thingsToDoID INTEGER AUTO_INCREMENT PRIMARY KEY,
  photoID VARCHAR(200),
  eventtype VARCHAR(100),
  caption VARCHAR(200),
  price VARCHAR(25),
  rating INTEGER
);

-- CREATE TABLE offering (
--   offeringID INTEGER AUTO_INCREMENT PRIMARY KEY,
--   caption VARCHAR(200)
-- );


-- ALTER TABLE similar_listing ADD FOREIGN KEY (offeringID) REFERENCES offering (offeringID);
-- ALTER TABLE things_to_do ADD FOREIGN KEY (offeringID) REFERENCES offering (offeringID); 






