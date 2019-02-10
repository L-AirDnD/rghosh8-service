const mysql = require('mysql');
const config = require('./config.js');
const db = mysql.createConnection(config);

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
