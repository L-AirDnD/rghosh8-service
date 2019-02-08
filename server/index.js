const express = require('express');
const path = require("path");
// Create an Express application. Express is a Nodejs web application framework. 
const app = express();
const PORT = 3004;
//body-parser is body parsing middleware. 
const bodyParser = require('body-parser');
//JSON will be used
app.use(bodyParser.json());
//use deep parsing for nested object handling
app.use(bodyParser.urlencoded({extended: true}));


const pathToAssets = path.join(__dirname, '../client/dist');
const staticAssetsMiddleware = express.static(pathToAssets);
app.use(staticAssetsMiddleware);

//Run this async function when listening event happens
let server = app.listen(PORT, () => {
  console.log("calling app.listener's callback function");
  let port = server.address().port;
  console.log(`app listening at ${port}`);
});