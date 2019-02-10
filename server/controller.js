const path = require("path");
const pathToDatabase = path.join(__dirname, '../database/indexDB.js')
const db = require(pathToDatabase);
console.log(db);


const getSimilarListing = (req, res) => {
  db.getSimilarListing((error, results, fields) => {
    if (error) console.log(error);
    res.send(results);
  })
};

const getThingsToDo = (req, res) => {
  db.getThingsToDo((error, results, fields) => {
    if (error) console.log(error);
    res.send(results);
  })
};

module.exports.db=db;
module.exports.getSimilarListing = getSimilarListing;
module.exports.getThingsToDo = getThingsToDo;