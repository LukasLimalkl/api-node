const express = require('express');
const bodyParser = require('body-parser');
const trucksControllers = require('./Controllers/TruckController');
const Marca = require('./DataControllers/Marca');
const Year = require('./DataControllers/year');
const Volvo = require('./DataControllers/modelsTruck/volvo-models');
const Scania = require('./DataControllers/modelsTruck/scania-models');
const Iveco = require('./DataControllers/modelsTruck/iveco-models');
const Man = require('./DataControllers/modelsTruck/man-models');
const Meca = require('./DataControllers/modelsTruck/mercedes-models');
const Daf = require('./DataControllers/modelsTruck/daf-models');

const jsonParse = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express();

router.get('/', (req, res) => {
  res.send('Use /marcatruck');
});

// ROTA MARCA DOS CAMINHOES

router.get('/marcatruck', Marca);

// MEDIA DOS CAMINHOES

router.post(
  '/media',
  jsonParse,
  urlencodedParser,
  trucksControllers.mediaTrucks
);

// ROTA DO ANO DOS CAMINHOES

router.get('/yeartruck', Year);

// ROTAS DOS MODELOS

router.get('/models/volvo', Volvo);

router.get('/models/scania', Scania);

router.get('/models/man', Man);

router.get('/models/daf', Daf);

router.get('/models/iveco', Iveco);

router.get('/models/mercedes', Meca);

module.exports = router;
