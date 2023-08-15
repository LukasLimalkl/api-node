const express = require('express');
const bodyParser = require('body-parser');
const trucksControllers = require('./Controllers/TruckController');

const jsonParse = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express();

router.get('/', (req, res) => {
  res.send('Use /truck');
});

// MEDIA DOS CAMINHOES

router.post(
  '/truck',
  jsonParse,
  urlencodedParser,
  trucksControllers.mediaTrucks
);

module.exports = router;
