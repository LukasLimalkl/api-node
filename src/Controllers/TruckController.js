const path = require('path');
const { sequelize, caminhao } = require('../Models/index');

// MARCA DOS CAMINHOES

const marcaTrucks = (req, res) => {
  const json = path.join(__dirname, '../data/marca.json');
  const file = JSON.parse(json);

  res.sendFile(file);
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
  const json = path.join(__dirname, '../data/year.json');
  const file = JSON.parse(json);

  res.sendFile(file);
};

// MODELO DOS CAMINHOES

const marcaMolelTruck = (req, res) => {
  const json = path.join(__dirname, '../data/modelsTruck/marca.json');
  const file = JSON.parse(json);

  res.sendFile(file);
};

const volvoTruck = (req, res) => {
  const json = path.join(__dirname, '../data/modelsTruck/volvo-models.json');
  const file = JSON.parse(json);

  res.sendFile(file);
};

const scaniaTruck = (req, res) => {
  const json = path.join(__dirname, '../data/modelsTruck/scania-models.json');
  const file = JSON.parse(json);

  res.sendFile(file);
};

const ivecoTruck = (req, res) => {
  const json = path.join(__dirname, '../data/modelsTruck/iveco-models.json');
  const file = JSON.parse(json);

  res.sendFile(file);
};

const mercedesTruck = (req, res) => {
  const json = path.join(__dirname, '../data/modelsTruck/mercedes-models.json');
  const file = JSON.parse(json);

  res.sendFile(file);
};

const manTruck = (req, res) => {
  const json = path.join(__dirname, '../data/modelsTruck/man-models.json');
  const file = JSON.parse(json);

  res.sendFile(file);
};

const dafTruck = (req, res) => {
  const json = path.join(__dirname, '../data/modelsTruck/daf-models.json');
  const file = JSON.parse(json);

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
