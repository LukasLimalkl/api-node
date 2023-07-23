const path = require('path');
const express = require('express');

const router = express();

router.get('/', (req, res) => {
  res.send('Use /data');
});

router.get('/data', (req, res) => {
  const file = path.join(__dirname, 'data/models.json');

  res.sendFile(file);
});

router.get('/data/ano', (req, res) => {
  const file = path.join(__dirname, 'data/year.json');

  res.sendFile(file);
});

module.exports = router;
