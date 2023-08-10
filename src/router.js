const express = require('express');
const bodyParser = require('body-parser');
const trucksControllers = require('./Controllers/TruckController');

const jsonParse = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express();

router.get('/', (req, res) => {
  res.send('Use /marcatruck');
});

// ROTA MARCA DOS CAMINHOES

router.get('/marcatruck', trucksControllers.marcaTrucks);

// MEDIA DOS CAMINHOES

router.post(
  '/media',
  jsonParse,
  urlencodedParser,
  trucksControllers.mediaTrucks
);

// ROTA DO ANO DOS CAMINHOES

router.get('/yeartruck', trucksControllers.yearTrucks);

// ROTAS DOS MODELOS

router.get(
  '/models/marca',
  jsonParse,
  urlencodedParser,
  trucksControllers.marcaMolelTruck
);

router.get(
  '/models/volvo',
  jsonParse,
  urlencodedParser,
  trucksControllers.volvoTruck
);

router.get(
  '/models/scania',
  jsonParse,
  urlencodedParser,
  trucksControllers.scaniaTruck
);

router.get(
  '/models/man',
  jsonParse,
  urlencodedParser,
  trucksControllers.manTruck
);

router.get(
  '/models/daf',
  jsonParse,
  urlencodedParser,
  trucksControllers.dafTruck
);

router.get(
  '/models/iveco',
  jsonParse,
  urlencodedParser,
  trucksControllers.ivecoTruck
);

router.get(
  '/models/mercedes',
  jsonParse,
  urlencodedParser,
  trucksControllers.mercedesTruck
);

module.exports = router;
