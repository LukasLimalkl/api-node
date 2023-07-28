const path = require('path');

// MARCA DOS CAMINHOES

const marcaTrucks = async (req, res) => {
  const file = await path.join(__dirname, '../data/marca.json');

  res.sendFile(file);
};

// MEDIA DOS CAMNHOES

const mediaTrucks = (req, res) => {
  res.status(200).json({
    message: 'ok',
  });
};

// ANO DOS CAMINHOES

const yearTrucks = (req, res) => {
  const file = path.join(__dirname, '../data/year.json');

  res.sendFile(file);
};

// MODELO DOS CAMINHOES

const marcaMolelTruck = async (req, res) => {
  const file = await path.join(__dirname, '../data/modelsTruck/marca.json');

  res.sendFile(file);
};

const volvoTruck = async (req, res) => {
  const file = await path.join(
    __dirname,
    '../data/modelsTruck/volvo-models.json'
  );

  res.sendFile(file);
};

const scaniaTruck = async (req, res) => {
  const file = await path.join(
    __dirname,
    '../data/modelsTruck/scania-models.json'
  );

  res.sendFile(file);
};

const ivecoTruck = async (req, res) => {
  const file = await path.join(
    __dirname,
    '../data/modelsTruck/iveco-models.json'
  );

  res.sendFile(file);
};

const mercedesTruck = async (req, res) => {
  const file = await path.join(
    __dirname,
    '../data/modelsTruck/mercedes-models.json'
  );

  res.sendFile(file);
};

const manTruck = async (req, res) => {
  const file = await path.join(
    __dirname,
    '../data/modelsTruck/man-models.json'
  );

  res.sendFile(file);
};

const dafTruck = async (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/daf-models.json');

  res.sendFile(file);
};

module.exports = {
  marcaTrucks,
  mediaTrucks,
  yearTrucks,
  marcaMolelTruck,
  volvoTruck,
  scaniaTruck,
  dafTruck,
  manTruck,
  mercedesTruck,
  ivecoTruck,
};
