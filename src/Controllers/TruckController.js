const path = require('path');
const { sequelize, caminhao } = require('../Models/index');

// MARCA DOS CAMINHOES

const marcaTrucks = (req, res) => {
  const file = path.join(__dirname, '../data/marca.json');

  res.json(file);
};

// MEDIA DOS CAMNHOES

const mediaTrucks = async (req, res) => {
  try {
    await sequelize.sync();

    const { truck, model, ano, media } = req.body;

    caminhao.create({
      truck,
      model,
      ano,
      media,
    });

    return res.status(201).json({ message: 'Dados enviados com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
    return res.status(500).json({ message: 'Erro ao enviar dados!' });
  }
};

// ANO DOS CAMINHOES

const yearTrucks = (req, res) => {
  const file = path.join(__dirname, '../data/year.json');

  res.json(file);
};

// MODELO DOS CAMINHOES

const marcaMolelTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/marca.json');

  res.json(file);
};

const volvoTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/volvo-models.json');

  res.json(file);
};

const scaniaTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/scania-models.json');

  res.json(file);
};

const ivecoTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/iveco-models.json');

  res.json(file);
};

const mercedesTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/mercedes-models.json');

  res.json(file);
};

const manTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/man-models.json');

  res.json(file);
};

const dafTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/daf-models.json');

  res.json(file);
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
