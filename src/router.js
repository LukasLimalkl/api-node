const express = require('express');
const trucksControllers = require('./Controllers/TruckController');

const router = express();

router.get('/', (req, res) => {
  res.send('Use /marcatruck');
});

// ROTA MARCA DOS CAMINHOES

router.get('/marcatruck', trucksControllers.marcaTrucks);

// MEDIA DOS CAMINHOES

router.post('/media', trucksControllers.mediaTrucks);

// ROTA DO ANO DOS CAMINHOES

router.get('/yeartruck', trucksControllers.yearTrucks);

// ROTAS DOS MODELOS

router.get('/models/marca', trucksControllers.marcaMolelTruck);

router.get('/models/volvo', trucksControllers.volvoTruck);

router.get('/models/scania', trucksControllers.scaniaTruck);

router.get('/models/man', trucksControllers.manTruck);

router.get('/models/daf', trucksControllers.dafTruck);

router.get('/models/iveco', trucksControllers.ivecoTruck);

router.get('/models/mercedes', trucksControllers.mercedesTruck);

module.exports = router;
