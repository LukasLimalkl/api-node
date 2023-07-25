const path = require('path');
const express = require('express');

const router = express();

router.get('/', (req, res) => {
  res.send('Use /marca');
});

// ROTA MARCA DOS CAMINHOES

router.get('/marca', (req, res) => {
  const file = path.join(__dirname, 'data/marca.json');

  res.sendFile(file);
});

// ROTA DO ANO DOS CAMINHOES

router.get('/yeartruck', (req, res) => {
  const file = path.join(__dirname, 'data/year.json');

  res.sendFile(file);
});

// ROTAS DOS MODELOS

router.get('/models/marca', (req, res) => {
  const file = path.join(__dirname, 'data/models/marca.json');

  res.sendFile(file);
});

router.get('/models/volvo', (req, res) => {
  const file = path.join(__dirname, 'data/models/volvo-models.json');

  res.sendFile(file);
});

router.get('/models/volvo', (req, res) => {
  const file = path.join(__dirname, 'data/models/volvo-models.json');

  res.sendFile(file);
});

router.get('/models/scania', (req, res) => {
  const file = path.join(__dirname, 'data/models/scania-models.json');

  res.sendFile(file);
});

router.get('/models/man', (req, res) => {
  const file = path.join(__dirname, 'data/models/man-models.json');

  res.sendFile(file);
});

router.get('/models/daf', (req, res) => {
  const file = path.join(__dirname, 'data/models/daf-models.json');

  res.sendFile(file);
});

router.get('/models/iveco', (req, res) => {
  const file = path.join(__dirname, 'data/models/iveco-models.json');

  res.sendFile(file);
});

router.get('/models/mercedes', (req, res) => {
  const file = path.join(__dirname, 'data/models/mercedes-models.json');

  res.sendFile(file);
});

module.exports = router;
