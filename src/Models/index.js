const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Truck = require('./TruckModels');

const truck = Truck(sequelize, Sequelize.DataTypes);

truck.create({
  truck: 'Volvo',
  model: 'FH16',
  ano: '2022',
  media: '8.9',
});

const db = {
  truck,
  sequelize,
};

module.exports = db;
