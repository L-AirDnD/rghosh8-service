const express = require('express');
const path = require("path");
const controller = require('./controller.js');

const app = express();
const PORT = process.env.PORT || 3004;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const pathToAssets = path.join(__dirname, '../client/dist');
const staticAssetsMiddleware = express.static(pathToAssets);
app.use(staticAssetsMiddleware);

app.get('/api/getSimilarListing', controller.getSimilarListing);
app.get('/api/getThingsToDo', controller.getThingsToDo);

let server = app.listen(PORT, () => {
  console.log("calling app.listener's callback function");
  let port = server.address().port;
  console.log(`app listening at ${port}`);
});