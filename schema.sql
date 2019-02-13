DROP DATABASE IF EXISTS ads;

CREATE DATABASE ads;

USE ads;

CREATE TABLE offering (
  offeringID INTEGER AUTO_INCREMENT,
  caption VARCHAR(200),

  PRIMARY KEY (offeringID)
);

CREATE TABLE similar_listing (
  similarListingID INTEGER AUTO_INCREMENT,
  photoID VARCHAR(200),
  genCaption VARCHAR(100),
  specCaption VARCHAR(200),
  price VARCHAR(25),
  rating INTEGER,
  numReviews INTEGER,
  offeringID INTEGER,

  PRIMARY KEY (similarListingID),
  FOREIGN KEY (offeringID) REFERENCES offering(offeringID)
);

CREATE TABLE things_to_do (
  thingsToDoID INTEGER AUTO_INCREMENT,
  photoID VARCHAR(200),
  genCaption VARCHAR(100),
  specCaption VARCHAR(200),
  price VARCHAR(25),
  rating INTEGER,
  numReviews INTEGER, 
  offeringID INTEGER,

  PRIMARY KEY (thingsToDoID),
  FOREIGN KEY (offeringID) REFERENCES offering(offeringID)

);





