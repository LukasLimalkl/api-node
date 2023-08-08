const path = require('path');
const { sequelize } = require('../Models/index');

// MARCA DOS CAMINHOES

const marcaTrucks = (req, res) => {
  const file = path.join(__dirname, '../data/marca.json');

  res.sendFile(file);
};

// MEDIA DOS CAMNHOES

const mediaTrucks = async (req, res) => {
  try {
    await sequelize.sync();

    return res.status(201).json({ message: 'Tabela criada com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
    return res.status(500).json({ message: 'Erro ao criar tabela' });
  }
};

// ANO DOS CAMINHOES

const yearTrucks = (req, res) => {
  const file = path.join(__dirname, '../data/year.json');

  res.sendFile(file);
};

// MODELO DOS CAMINHOES

const marcaMolelTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/marca.json');

  res.sendFile(file);
};

const volvoTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/volvo-models.json');

  res.sendFile(file);
};

const scaniaTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/scania-models.json');

  res.sendFile(file);
};

const ivecoTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/iveco-models.json');

  res.sendFile(file);
};

const mercedesTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/mercedes-models.json');

  res.sendFile(file);
};

const manTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/man-models.json');

  res.sendFile(file);
};

const dafTruck = (req, res) => {
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
