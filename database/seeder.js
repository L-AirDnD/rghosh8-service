const mysql = require('mysql');
const faker = require('faker');
console.log(faker.finance.amount(1, 5));
const config = require('./config.js');
const db = mysql.createConnection(config);
const MAX_Record = 100;

const randomNumberGenerator = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const tableGenerator = (table, generator, recordNum) => {
  for (let index = 0; index < recordNum; index++) {
    table.push(generator());
  }
  return table;
}

const similarListingGenerator = () => {
  return [
    faker.image.avatar(),
    faker.lorem.sentence(),
    faker.lorem.sentence(3),
    faker.finance.amount(50, 500),
    faker.random.number(1,5),

  ]
}

const thingsToDoGenerator = () => {
  return [
    faker.image.avatar(),
    faker.lorem.sentence(),
    faker.lorem.sentence(3),
    faker.finance.amount(50, 500),
    faker.random.number(1,5),
  
  ]
}

// const offeringGenerator = () => {
//   return [
//     faker.lorem.sentence(3)
//   ]
// }


/*---------------------------------------------------------*/
/*                    SEED DATA                      */
/*---------------------------------------------------------*/
const similarListing = tableGenerator([], similarListingGenerator, MAX_Record);
const thingsToDo = tableGenerator([], thingsToDoGenerator, MAX_Record);
//const offering = tableGenerator([], offeringGenerator, MAX_Record);

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

//const insertOfferingSql = `INSERT INTO offering (caption) VALUES (?)`;

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



const getSimilarListing = function(callback) {
  db.query(`SELECT * FROM similar_listing`, callback);
}

const getThingsToDo = function(callback) {
  db.query(`SELECT * FROM things_to_do`, callback);
}



module.exports = {
  getSimilarListing,
  getThingsToDo 
};






