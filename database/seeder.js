const mysql = require('mysql');
const faker = require('faker');
const config = require('./config.js');
const db = mysql.createConnection(config);
const maxRecord = 100;

const generateTable = (table, generator, recordNum) => {
  for (let index = 0; index < recordNum; index++) {
    table.push(generator());
  }
  return table;
}

const offeringGenerator = () => {
  return [
    faker.lorem.sentence(3)
  ]
}

const generateSimilarListing = () => {
  return [
    faker.image.avatar(),
    faker.lorem.sentence(),
    faker.lorem.sentence(3),
    faker.finance.amount(50, 500),
    faker.random.number({ min: 1, max: 5 }),
    faker.random.number(100)
  ]
}

const generateThingsToDo = () => {
  return [
    faker.image.avatar(),
    faker.lorem.sentence(),
    faker.lorem.sentence(3),
    faker.finance.amount(50, 500),
    faker.random.number({ min: 1, max: 5 }),
    faker.random.number(100)
  ]
}

/*---------------------------------------------------------*/
/*                    SEED DATA                      */
/*---------------------------------------------------------*/
const similarListing = generateTable([], generateSimilarListing, maxRecord);
const thingsToDo = generateTable([], generateThingsToDo, maxRecord);
const offering = generateTable([], offeringGenerator, maxRecord);

/*---------------------------------------------------------*/
/*                     DATA INSERTION                      */
/*---------------------------------------------------------*/

const isertSimilarListingSql = `
  INSERT INTO similar_listing (
    photoID, listingtype, caption, price, rating
  )
  VALUES (?, ?, ?, ?, ?)
`;

const insertThingsToDoSql = `
  INSERT INTO things_to_do (
    photoID, eventtype, caption, price, rating
  )
  VALUES (?, ?, ?, ?, ?)
`;

const insertOfferingSql = `INSERT INTO offering (caption) VALUES (?)`;

/*---------------------------------------------------------*/
/*                     POPULATING THE TABLE                */
/*---------------------------------------------------------*/

similarListing.forEach((list) => {
  db.query(isertSimilarListingSql, list, (err) => {
    if (err) throw err;
  });
});

thingsToDo.forEach((todo) => {
  db.query(insertThingsToDoSql, todo, (err) => {
    if (err) throw err;
  });
});

offering.forEach((item) => {
  db.query(insertOfferingSql, item, (err) => {
    if (err) throw err;
  });
});


// const getSimilarListing = function(callback) {
//   db.query(`SELECT * FROM similar_listing`, callback);
// }

// const getThingsToDo = function(callback) {
//   db.query(`SELECT * FROM things_to_do`, callback);
// }

// module.exports = {
//   getSimilarListing,
//   getThingsToDo 
// };