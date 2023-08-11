const path = require('path');
const fs = require('fs');
const { sequelize, caminhao } = require('../Models/index');

// MARCA DOS CAMINHOES
/*eslint-disable*/

const marcaTrucks = (req, res) => {
  const file = path.join(__dirname, '../data/marca.json');

  fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });

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

  fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });

};

// MODELO DOS CAMINHOES

const marcaMolelTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/marca.json');

   fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });
};

const volvoTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/volvo-models.json');

  fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });
};

const scaniaTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/scania-models.json');

  fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });
};

const ivecoTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/iveco-models.json');

  fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });
};

const mercedesTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/mercedes-models.json');

  fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });
};

const manTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/man-models.json');

  fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });
};

const dafTruck = (req, res) => {
  const file = path.join(__dirname, '../data/modelsTruck/daf-models.json');

  fs.readFile(file, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      return res.status(500).json({ message: 'Erro ao fazer parse do JSON' });
    }
  });
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
